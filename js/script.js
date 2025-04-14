
/*       Get data of categories from firebase */

function getCategories(){
    let selectInput = document.getElementById("catm");
    selectInput.innerHTML = `<option selected disabled>Select The Category of This Product</option>`;
    

    fetch("https://client-side-technology-default-rtdb.firebaseio.com/category.json")
    .then((res)=>{
        return res.json();
    }).then((categories)=>{
        console.log(categories);
        

        for (const key in categories) {
            selectInput.innerHTML += `<option>${categories[key].name}</option>`;
        }
    }).catch((err)=>{
        console.log(err);
        
    })
}

getCategories();

/** Start of Side bar */

const contentData = {
    section1: 
        `
            <div id="my-formm" class="row my-input d-flex justify-content-center pt-3">
                <div class="text-center">
                    <h1>Add Products</h1>
                </div>
                <div class="col-12 col-sm-10 col-lg-8  p-3 ">
                    <form>
                        <div>
                            <input type="text " class="form-control" hidden id="keym" placeholder="Enter Key">
                        </div>
                        <div class="mb-3">
                            <label for="idm" class="form-label">ID:</label>
                            <input type="text" class="form-control" id="idm" placeholder="Enter Id">
                            <span id="idError" style="color: red; visibility: hidden;">Error</span>
                        </div>
                        <div class="mb-3">
                            <label for="titlem" class="form-label">Name:</label>
                            <input type="text" class="form-control" id="titlem" placeholder="Enter The Name">
                            <span id="titleError" style="color: red; visibility: hidden;">Error</span>
                        </div>
                        <div class="mb-3">
                            <label for="desm" class="form-label">Description:</label>
                            <input type="text" class="form-control" id="desm" placeholder="Enter The Description">
                            <span id="descriptionError" style="color: red; visibility: hidden;">Error</span>
                        </div>
                        <div class="mb-3">
                            <label for="catm" class="form-label">Category:</label>
                            <select class="form-select" id="catm" aria-label="Default select example">
                                
                            </select>
                            <span id="catError" style="color: red; visibility: hidden;">Error</span>
                        </div>
                        <div class="mb-3">
                            <label for="pricem" class="form-label">Price:</label>
                            <input type="text" class="form-control" id="pricem" placeholder="Enter The Price">
                            <span id="priceError" style="color: red; visibility: hidden;">Error</span>
                        </div>
                        <div class="mb-3">
                            <label for="imagem" class="form-label">Image:</label>
                            <input type="text" class="form-control" id="imagem" placeholder="Enter The Source Of Image">
                            <span id="sourceError" style="color: red; visibility: hidden;">Error</span>
                        </div>
                        <div class="mb-3">
                            <label for="quantitym" class="form-label">Stock Quantity:</label>
                            <input type="text" class="form-control" id="quantitym" placeholder="Enter The quantity of stock">
                            <span id="quantityError" style="color: red; visibility: hidden;">Error</span>
                        </div>
                        <input type="submit" class="my-buttonm btn" value="Add New Product"></input>
                    </form>

                    
                    

                </div>
            </div>

            
            <div id="my-pro" class="row my-productsm d-flex justify-content-center ">
                <div  class="col-12">
                    <div class="text-center my-3">
                        <h1>All Produts</h1>
                    </div>
                    <div><button class="my-buttonm my-3 btn" onclick="getProducts();">Show Products</button></div>
                </div>
                
            </div>

        
        `
    
    ,
    
    section3: "This sections for Categories",
    section3: `
        <div id="my-ordersm" class="row my-input d-flex justify-content-center pt-3">
            <div  class="col-12">
                <div class="text-center my-3">
                    <h1>Orders</h1>
                </div>
            </div>
            
        </div>
    
    `,
    section4: "Add Admins"
};

// Select all sidebar links
const tabLinks = document.querySelectorAll('.my-link');
const contentDisplay = document.getElementById('containerm');

let a = "section1"
// Function to handle tab clicks
tabLinks.forEach(link => {

    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        tabLinks.forEach(l => l.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');

        // Update content display
        const selectedContent = this.getAttribute('data-content');
        contentDisplay.innerHTML = contentData[selectedContent];
        if(selectedContent === "section1"){
            
            setTimeout(()=>{
                getCategories();
            },100);
        }
        if(selectedContent === "section3"){
            setTimeout(()=>{
                showOrders();
            }, 100);
        }
    });
});


/** End of Side bar */

/** Start of Form of Products */


let idInput = document.getElementById("idm");
let titleInput = document.getElementById("titlem");
let descriptionInput = document.getElementById("desm");
let categoryInput = document.getElementById("catm");
let priceInput = document.getElementById("pricem");
let sourceInput = document.getElementById("imagem");
let keyInput = document.getElementById("keym");
let quantityInput = document.getElementById("quantitym")
let forms = document.getElementsByTagName("form");

let idSpan = document.getElementById("idError");
let priceSpan = document.getElementById("priceError");
let titleSpan = document.getElementById("titleError");
let descriptionSpan = document.getElementById("descriptionError");
let sourceSpan = document.getElementById("sourceError");
let catSpan = document.getElementById("catError");
let quantitySpan = document.getElementById("quantityError");


let productForm = forms[0];



let isID = false;
let isTitle = false;
let isDes = false;
let isPrice = false;
let isSource = false;
let isQuantity = false;

quantityInput.addEventListener("input",function(e) {
    let quantityValue = e.target.value;
    let regExp = /^\d+$/ig;
    
    if(!regExp.test(quantityValue)){
        isQuantity = false;
        quantitySpan.innerHTML = "Quantity is not correct"; 
        quantitySpan.style.visibility = "visible";
    }
    else {
        isQuantity = true;
        quantitySpan.innerHTML = "Error"; 
        quantitySpan.style.visibility = "hidden";
    }
    
})

idInput.addEventListener("input",function(e) {

    let idValue = e.target.value;


    fetch("https://client-side-technology-default-rtdb.firebaseio.com/product.json")
    .then((res)=>{
        return res.json();
    }).then((res2)=>{
        // console.log(res2);
        

        for (const key in res2) {

            // console.log(res2[key]);

            if(res2[key].ID === idValue ){


                isID = false;
                idSpan.innerHTML = "Id has already been found"; 
                idSpan.style.visibility = "visible";

            }
        }
    }).catch((err)=>{
        console.log(err);
        
    })






    let regExp = /^\d+$/ig;
    
    if(!regExp.test(idValue)){
        isID = false;
        idSpan.innerHTML = "Id is not correct"; 
        idSpan.style.visibility = "visible";
    }
    else {
        isID = true;
        idSpan.innerHTML = "Error"; 
        idSpan.style.visibility = "hidden";
    }
    
})

titleInput.addEventListener("input",function(e) {
    let titleValue = e.target.value;
    let regExp = /^[A-Z a-z]/ig;

    if(!regExp.test(titleValue)){
        isTitle = false;
        titleSpan.innerHTML = "Name is not correct"; 
        titleSpan.style.visibility = "visible";
    }
    else {
        isTitle = true;
        titleSpan.innerHTML = "Error"; 
        titleSpan.style.visibility = "hidden";
    }
    
})

descriptionInput.addEventListener("input",function(e) {
    let descriptionValue = e.target.value;
    let regExp = /^[A-Z a-z]/ig;

    if(!regExp.test(descriptionValue)){
        isDes = false;
        descriptionSpan.innerHTML = "Description is not correct"; 
        descriptionSpan.style.visibility = "visible";
    }
    else {
        isDes = true;
        descriptionSpan.innerHTML = "Error"; 
        descriptionSpan.style.visibility = "hidden";
    }
    
})

priceInput.addEventListener("input",function(e) {
    let priceValue = e.target.value;
    let regExp = /^\d+$/ig;

    if(!regExp.test(priceValue)){
        isPrice = false;
        priceSpan.innerHTML = "Price is not correct"; 
        priceSpan.style.visibility = "visible";
    }
    else {
        isPrice = true;
        priceSpan.innerHTML = "Error"; 
        priceSpan.style.visibility = "hidden";
    }
})

sourceInput.addEventListener("input",function(e) {
    let sourceValue = e.target.value;
    let regExp = /^./ig;

    if(!regExp.test(sourceValue)){
        isSource = false;
        sourceSpan.innerHTML = "Source is not correct"; 
        sourceSpan.style.visibility = "visible";
    }
    else {
        isSource = true;
        sourceSpan.innerHTML = "Error"; 
        sourceSpan.style.visibility = "hidden";
    }
    
})

categoryInput.addEventListener("change",function() {
    catSpan.style.visibility = "hidden";
    
})

productForm.addEventListener("submit", function(e){

    let idValue = idInput.value;
    let titleValue = titleInput.value;
    let priceValue = priceInput.value;
    let descriptionValue = descriptionInput.value;
    let sourceValue = sourceInput.value;
    let catValue = categoryInput.value;
    let quantityValue = quantityInput.value;

    if(isDes === false || isID === false || isPrice === false || isSource === false || isTitle === false || isQuantity == false)
    {
        if(catValue == "Select The Category of This Product"){
            catSpan.innerHTML = "Select a category"; 
            catSpan.style.visibility = "visible";
        }
        if(quantityValue === ""){
            quantitySpan.innerHTML = "Enter a quantity"; 
            quantitySpan.style.visibility = "visible";
        }
        if(idValue === ""){
            idSpan.innerHTML = "Enter a id"; 
            idSpan.style.visibility = "visible";
        }
        if(titleValue === ""){
            titleSpan.innerHTML = "Enter a name"; 
            titleSpan.style.visibility = "visible";
        }
        if(priceValue === ""){
            priceSpan.innerHTML = "Enter a price"; 
            priceSpan.style.visibility = "visible";
        }
        if(descriptionValue === ""){
            descriptionSpan.innerHTML = "Enter a description"; 
            descriptionSpan.style.visibility = "visible";
        }
        if(sourceValue === ""){
            sourceSpan.innerHTML = "Enter a source"; 
            sourceSpan.style.visibility = "visible";
        }
        e.preventDefault();
    }
    else{
        const product = {
            ID: idValue,
            Title: titleValue,
            Price: priceValue,
            Description: descriptionValue,
            Category: catValue,
            Source: sourceValue,
            Quantity: quantityValue
        }
        
        addProducts(product);
        
        e.preventDefault();

        clearFields();

    }

})


function clearFields(){
    idInput.value = "";
    titleInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";
    sourceInput.value = "";
    categoryInput.value = "Select The Category of This Product";
    quantityInput.value = "";
}

function addProducts(product) {
    
    console.log(product);
    console.log("asyhdgfsjaygfsdj");
    
    let check = keyInput.value ;
    if (!check) {
        
        fetch("https://client-side-technology-default-rtdb.firebaseio.com/product.json",{
            method: 'POST',
            body: JSON.stringify(product),
            headers: {'Content-Type': 'application/json'}
        }).then((res)=>{
            return res.json();
        }).then((res2)=>{
            // console.log(res2);
        }).catch((err)=>{
            console.log(err);
            
        })
        
    } else {
        console.log("PAAAAAAAAAAAATTTTTTTTTTTTTCCCCCCCCHHHHHHhhh");
        
        
        fetch(`https://client-side-technology-default-rtdb.firebaseio.com/product/${check}.json`,{
            method: 'PATCH',
            body: JSON.stringify(product),
            headers: {'Content-Type': 'application/json'}
        }).then((res)=>{
            return res.json();
        }).then((res2)=>{
            // console.log(res2);
        }).catch((err)=>{
            console.log(err);
            
        })
        
    }

    setTimeout(getProducts, 500);



    
}

function getProducts(){
    let productsDiv = document.getElementById("my-pro");
    
    productsDiv.innerHTML = "";

    productsDiv.innerHTML = `
        <div class="col-12">
            <div class="text-center my-3">
                <h1>All Produts</h1>
            </div>
            <div><button class="my-buttonm my-3 btn" onclick="getProducts();">Show Products</button></div>
        </div>
    
    `;

    


    fetch("https://client-side-technology-default-rtdb.firebaseio.com/product.json")
    .then((res)=>{
        return res.json();
    }).then((res2)=>{
        // console.log(res2);
        

        for (const key in res2) {
            // console.log(res2[key]);
            productsDiv.innerHTML += `
            <div class="col-lg-4 col-xl-3 col-12 col-sm-6 my-3 d-flex justify-content-center">
                <div class="card" style="width: 20rem;">
                    <img src="../Resources/${res2[key].Source}.png" 
                        class="card-img-top img-fluid" 
                        alt="${res2[key].Title}" 
                        style=" height: 250px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title m-auto">${res2[key].Title}</h5>
                        <h5 class="card-title m-auto">${res2[key].Price} E£</h5>
                        <h5 class="card-title m-auto">Stock Quantity: ${res2[key].Quantity}</h5>
                        <a class="btn my-buttonm" onclick="removeProduct('${key}');">Remove Product</a>
                        <a class="btn my-buttonm" href="#my-formm" onclick="updateProduct('${key}', '${res2[key].ID}', '${res2[key].Title}', '${res2[key].Description}', '${res2[key].Category}', '${res2[key].Price}','${res2[key].Source}','${res2[key].Quantity}')">Update Product</a>
                    </div>                                                                                                                                                                                                                   
                </div>
            </div>
            `;

            console.log(key);
            
        

            
        }
    }).catch((err)=>{
        console.log(err);
        
    })
}

function removeProduct(id){

    let isConfirm = confirm("Do you want to remove this producr?");

    if(isConfirm){
        fetch(`https://client-side-technology-default-rtdb.firebaseio.com/product/${id}.json`,{
            method: 'DELETE'
        }).then((res2)=>{
            console.log(res2);
        }).catch((err)=>{
            console.log(err);
            
        })
        setTimeout(getProducts,500);
    }



}


function updateProduct(ID,id, title, description, category, price, source, quantity)  {

    
    keyInput.value = ID;
    idInput.value = id;
    titleInput.value = title;
    priceInput.value = price;
    descriptionInput.value = description;
    sourceInput.value = source;
    categoryInput.value = category;
    quantityInput.value = quantity;
    
}




/* Start of Orders of the Users */

// function orderSection(){

// }


let res3 ;

function showOrders(){
    let ordersDiv = document.getElementById("my-ordersm");


    ordersDiv.innerHTML = "";

    ordersDiv.innerHTML =
    `
        <div id="my-ordersm" class="row my-input d-flex justify-content-center pt-3">
            <div  class="col-12">
                <div class="text-center my-1">
                    <h1>Orders</h1>
                </div>
            </div>
            
        </div>
    
    `


    fetch("https://client-side-technology-default-rtdb.firebaseio.com/product.json")
    .then((res)=>{
        return res.json();
    }).then((res2)=>{
        // console.log(res2);
        

        for (const key in res2) {
            // console.log(res2[key]);
            ordersDiv.innerHTML += `
            <div class="col-lg-4 col-xl-3 col-12 col-sm-6 my-3 d-flex justify-content-center">
                <div class="card" style="width: 15rem;">
                    <img src="../Resources/${res2[key].Source}.png" 
                        class="card-img-top img-fluid" 
                        alt="${res2[key].Title}" 
                        style=" height: 250px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title m-auto">${res2[key].Title}</h5>
                        <h5 class="card-title m-auto">${res2[key].Price} E£</h5>
                        <a class="btn my-buttonm" onclick="rejectOrder('${key}','${res2}','${res2[key].ID}');">Reject The Order</a>
                        <a class="btn my-buttonm" onclick="rejectOrder('${key}','${res2}','${res2[key].ID}');">Confirm The Order</a>
                    </div>                                                                                                                                                                                                                   
                </div>
            </div>
            `;

            console.log(key);
            
        

            
        }
    }).catch((err)=>{
        console.log(err);
        
    })
}


function rejectOrder(id,ob1,ob2){


    console.log("HOOOOOOOOOOO");
    
    console.log(id);
    console.log(ob1);
    console.log(ob2);

    
    let isConfirm = confirm("Do you want to reject this order?");

    if(isConfirm){
        fetch(`https://client-side-technology-default-rtdb.firebaseio.com/product/${id}.json`,{
            
            method: 'DELETE'
        }).then((res2)=>{
            console.log(res2);
        }).catch((err)=>{
            console.log(err);
            
        })
        setTimeout(showOrders,500);
    }



}






