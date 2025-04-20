
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
    
    section2: `  <div class="container  my-input pt-3 text-white">

  <h1 class="mb-4 text-center">Categories Section</h1>

  <!-- Admin Form -->
  
      <div class="row my-input d-flex justify-content-center pt-3">
        <div class="col-md-12 mb-3">
          <label class="form-label">ID</label>
          <input type="number" class="form-control" id="idCategory" placeholder="please , Enter Category ID ">
        </div>
        <div class="col-md-12 mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" id="nameCategory" placeholder="please , Enter Category name ">
        </div>
        
     
      <div class="mt-12 mx-auto  text-center">
        <button class="btn btn-primary mx-auto p-2 w-25 my-buttonm" id="saveCategory" onclick="saveCategory()">Save</button>
        <button class="btn btn-success d-none mx-auto p-2 w-25" id="UpdateCategpry" onclick="UpdateCategory()">Update</button>
      </div>
     <h2 class=" text-center mt-5 mb-2">All Categories</h2>
<button onclick="ShowCategoryTable()" class="btn btn-primary my-3 w-25 text-center mx-auto p-2 my-buttonm">Show Categories</button>
  <!-- Admin Table -->
 
  <div id="tableContainerCategory"  style="display: none;">
      <table class="table table-striped table-hover  table-responsive">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody id="tbodyCategory"></tbody>
      </table>
 </div>`,
    section3: `
        <div id="my-ordersm" class="row my-input d-flex justify-content-center pt-3">
            <div  class="col-12">
                <div class="text-center my-3">
                    <div class="container mx-auto mt-5">
                        <h2>Orders</h2>
                        <div id="ordersContainer" class="mt-4 row row-cols-lg-3 row-md-2 row-gap-sm-1"></div>
                    </div>
                </div>
            </div>
            
        </div>
    
    `,
    section4: `
    <div class="container pt-3 my-input text-white">

  <h1 class="mb-4 text-center">Admin Section</h1>

  <!-- Admin Form -->
  
      <div class="row g-3">
        <div class="col-md-12 mb-3">
          <label class="form-label">ID</label>
          <input type="number" class="form-control" id="id" placeholder="please , Enter Admin ID ">
        </div>
        <div class="col-md-12 mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="please , Enter Admin name ">
        </div>
        <div class="col-md-12 mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="please , Enter Admin Email ">
        </div>
        <div class="col-md-12 mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" id="password"  placeholder="please , Enter Admin Password ">
        </div>
     
      <div class="mt-12 mx-auto  text-center">
        <button class="btn btn-primary mx-auto p-2 w-25 my-buttonm" id="save" onclick="saveAdmin()">Save</button>
        <button class="btn btn-success d-none mx-auto p-2 w-25" id="Update" onclick="UpdateAdmin()">Update</button>
      </div>
     <h2 class=" text-center mt-5 mb-2">All Admins</h2>
<button onclick="ShowTable()" class="btn btn-primary my-3 w-25 text-center mx-auto p-2 my-buttonm">Show Admins</button>
  <!-- Admin Table -->
 
  <div id="tableContainer"  style="display: none;">
      <table class="table table-striped table-hover  table-responsive">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>
 </div>
    `
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
                Orders();
                
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

        let myBtn = document.querySelector("#myBtn");
        myBtn.value = "Add New Product";
        
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

    let myBtn = document.querySelector("#myBtn");
    myBtn.value = "Update Product";

    
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

// function showOrders(){
//     let ordersDiv = document.getElementById("my-ordersm");


//     ordersDiv.innerHTML = "";

//     ordersDiv.innerHTML =
//     `
//         <div id="my-ordersm" class="row my-input d-flex justify-content-center pt-3">
//             <div  class="col-12">
//                 <div class="text-center my-1">
//                     <h1>Orders</h1>
//                 </div>
//             </div>
            
//         </div>
    
//     `


//     fetch("https://client-side-technology-default-rtdb.firebaseio.com/product.json")
//     .then((res)=>{
//         return res.json();
//     }).then((res2)=>{
//         // console.log(res2);
        

//         for (const key in res2) {
//             // console.log(res2[key]);
//             ordersDiv.innerHTML += `
//             <div class="col-lg-4 col-xl-3 col-12 col-sm-6 my-3 d-flex justify-content-center">
//                 <div class="card" style="width: 15rem;">
//                     <img src="../Resources/${res2[key].Source}.png" 
//                         class="card-img-top img-fluid" 
//                         alt="${res2[key].Title}" 
//                         style=" height: 250px; object-fit: cover;">
//                     <div class="card-body">
//                         <h5 class="card-title m-auto">${res2[key].Title}</h5>
//                         <h5 class="card-title m-auto">${res2[key].Price} E£</h5>
//                         <a class="btn my-buttonm" onclick="rejectOrder('${key}','${res2}','${res2[key].ID}');">Reject The Order</a>
//                         <a class="btn my-buttonm" onclick="rejectOrder('${key}','${res2}','${res2[key].ID}');">Confirm The Order</a>
//                     </div>                                                                                                                                                                                                                   
//                 </div>
//             </div>
//             `;

//             console.log(key);
            
        

            
//         }
//     }).catch((err)=>{
//         console.log(err);
        
//     })
// }


// function rejectOrder(id,ob1,ob2){


//     console.log("HOOOOOOOOOOO");
    
//     console.log(id);
//     console.log(ob1);
//     console.log(ob2);

    
//     let isConfirm = confirm("Do you want to reject this order?");

//     if(isConfirm){
//         fetch(`https://client-side-technology-default-rtdb.firebaseio.com/product/${id}.json`,{
            
//             method: 'DELETE'
//         }).then((res2)=>{
//             console.log(res2);
//         }).catch((err)=>{
//             console.log(err);
            
//         })
//         setTimeout(showOrders,500);
//     }



// }

// Orders Section

async function Orders() {
    let index=1;
    const container = document.getElementById("ordersContainer");

    if(!container) return;
   
  
    container.innerHTML = "";
  
    try {
      const res = await fetch("https://client-side-technology-default-rtdb.firebaseio.com/order.json");
      const data = await res.json();
  
     
  
      for (const key in data) {
        //  change badge based on order status
          let statusClass = "text-bg-secondary"; 
          if (data[key].status === "accepted" || data[key].status === "success") {
            statusClass = "text-bg-success";
          } else if (data[key].status === "rejected") {
            statusClass = "text-bg-danger";
          }
  
          // add card to every order in container
          const div = document.createElement("div");
          div.className = "col mb-3";
          if(data[key].status=='pending'){
            div.innerHTML = `
          
                  <div class="card quote-card w-" style="max-width: 400px; height:80%;">
      <div class="quote-icon">
        ${index}
      </div>
      <div class="card-body text-center">
      <h5 class="card-title bg-primary-subtle p-2 rounded-3">${data[key].userName}</h5>
      <div class="text-center ">
      <p class="badge ${statusClass} w-50 ">Status: <strong>${data[key].status}</strong></p>
      </div>
        <ul style="list-style: none; list-style-type: none;" class="">
             
                ${data[key].cartItems.map(item => `<li>${item.title} - ${item.price} EGP  <span class="bg-info p-2 w-100 rounded-2"> ${item.quantity}</span>  </li>`)}
              </ul>
              <div><p>${new Date(data[key].timestamp).toLocaleString()}</p></div>
        <hr class="mt-2">
        <footer class=" author">
  <button class="btn btn-success me-2" id="Accept" onclick="updateStatus('${key}', 'accepted')">Accept</button>
          <button class="btn btn-danger" id="reject" onclick="updateStatus('${key}', 'rejected')" >Reject</button>
        </footer>
      </div>
    </div>
            
         
         
          
          `;
          
          }else{
            div.innerHTML = `
           <div class="card quote-card w-" style="max-width: 400px; height:80%;">
      <div class="quote-icon">
        ${index}
      </div>
      <div class="card-body text-center">
      <h5 class="card-title bg-primary-subtle p-2 rounded-3">${data[key].userName}</h5>
      <div class="text-center ">
      <p class="badge ${statusClass} w-50 ">Status: <strong>${data[key].status}</strong></p>
      </div>
        <ul style="list-style: none; list-style-type: none;" class="">
             
                ${data[key].cartItems.map(item => `<li>${item.title} - ${item.price} EGP  <span class="bg-info p-2 w-100 rounded-2"> ${item.quantity}</span>  </li>`)}
              </ul>
             
        <hr class="mt-2">
         <div><p>${new Date(data[key].timestamp).toLocaleString()}</p></div>
      </div>
    </div>
            
                </div>
              </div>
    `;
          }
          container.appendChild(div);
          index++
        
      }
  
  
    } catch (error) {
      console.error("Error loading orders:", error);
      container.innerHTML = "<p>Error loading orders.</p>";
}}

// take status from admin and update it in firbase
async function updateStatus(orderId, status) {
    setTimeout(()=>{
        document.getElementById("Accept").classList.add("d-none")
        document.getElementById("reject").classList.add("d-none")
    }),(1000)
    
    try{ await fetch(`https://client-side-technology-default-rtdb.firebaseio.com/order/${orderId}.json`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
        headers: { "Content-Type": "application/json" }
      }) 
     
      Orders() ;
  }
      catch(err) {
  console.log(err)
}

}


// Orders();
    
    // Orders();


//////////////

//! admin Section

let nameAdminInput, tbody, idAdminInpute, updateButton, saveButton, keyy, numberRegex, nameRegex, admins, EmailInpute, PasswordInput, emailRegex , PasswordRegex;

async function saveAdmin() {

    idAdminInpute = document.getElementById("id");
    nameAdminInput = document.getElementById("name");
    EmailInpute = document.getElementById("email");
    PasswordInput = document.getElementById("password");
  

    // regex of id 
    numberRegex = /^\d{1,5}$/;
    if (!idAdminInpute.value.trim()) return alert("Please enter ID of Admin.");
    if (!numberRegex.test(idAdminInpute.value.trim())) return alert("ID must be between 1 and 5 digits and positive.");
  
    for (const key in admins) {
      if (admins[key].id === idAdminInpute.value.trim()) return alert("ID already exists.");
    }

    // Regex of name 
  nameRegex = /^admin[A-Za-z\s_-]+$/;
    if (!nameAdminInput.value.trim()) return alert("Please enter Admin name.");
    if (!nameRegex.test(nameAdminInput.value.trim())) return alert("Name must start with admin and contain letters and spaces only .");
    for (const key in admins) {
      if (admins[key].name === nameAdminInput.value.trim()) return alert("Name already exists.");
    }
// Regex of Email
   emailRegex = /^admin[A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.com$/i;
    if (!EmailInpute.value.trim()) return alert("Please enter Admin email.");
    if (!emailRegex.test(EmailInpute.value.trim())) return alert("Email must start with 'admin' and end with '.com'");
    for (const key in admins) {
      if (admins[key].email === EmailInpute.value.trim()) return alert("Email already exists.");
    }
// Regex of password
  PasswordRegex = /^[A-Z](?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]).*$/;
    if (!PasswordInput.value.trim()) return alert("Please enter Admin password.");
    if (!PasswordRegex.test(PasswordInput.value.trim())) return alert("Is Password must start with uppercase letter and include at least 1 number and 1 special character.");
  
    // add admin
    const Admin = {
      id: idAdminInpute.value.trim(),
      name: nameAdminInput.value.trim(),
      email: EmailInpute.value.trim(),
      password: PasswordInput.value.trim()
    };
  
    try {
      await fetch("https://client-side-technology-default-rtdb.firebaseio.com/admins.json", {
        method: 'POST',
        body: JSON.stringify(Admin),
        headers: { 'Content-Type': 'application/json' }
      });
  
      clearForm();
      showAdmins();
    } catch (err) {
      console.error("Error saving admin:", err);
    }
}

       
    
    //NOTE display Admins 
async function showAdmins() {

        tbody = document.getElementById("tbody");
        if (!tbody) return;

        tbody.innerHTML = '';
        try {
            const res = await fetch("https://client-side-technology-default-rtdb.firebaseio.com/admins.json");
            admins = await res.json();
            // console.log(categories)
            for (const key in admins) {
                const admin = admins[key];

                if (!admin) continue; 
            
                tbody.innerHTML += `
                <tr>
                    <td>${admin.id}</td>
                    <td>${admin.name}</td>
                    <td>${admin.email}</td>
                    <td>${admin.password}</td>
                    <td><button class="btn btn-danger" onclick="deleteAdmin('${key}')">Delete</button></td>
                    <td><button class="btn btn-success" onclick="prepareUpdate('${key}' ,'${admin.id}', '${admin.name}','${admin.email}','${admin.password}')">Update</button></td>
                </tr>`;
            
            
            }
        } catch (error) {
            console.error("Error loading categories:", error);
        
        }
        
}


//NOTE  delete admin 
async function deleteAdmin(id) {
    try {
        await fetch(`https://client-side-technology-default-rtdb.firebaseio.com/admins/${id}.json`, {
            method: 'DELETE'
        });
        showAdmins();
    } catch (err) {
        console.error("Error deleting category:", err);
    }
}



//NOTE  prepare Inputes for update 
function prepareUpdate(key ,id, name , email, password) {
    keyy = key;

  idAdminInpute = document.getElementById("id");
  nameAdminInput = document.getElementById("name");
  EmailInpute = document.getElementById("email");
  PasswordInput = document.getElementById("password");

  updateButton = document.getElementById("Update");
  saveButton = document.getElementById("save");

  idAdminInpute.value = id;
  nameAdminInput.value = name;
  EmailInpute.value = email;
  PasswordInput.value = password;

  idAdminInpute.readOnly = true;
  nameAdminInput.readOnly=true;
  saveButton.classList.add("d-none");
  updateButton.classList.remove("d-none");
    
}


//NOTE  update Admin
async function UpdateAdmin(){

 
nameAdminInput = document.getElementById("name");

PasswordInput = document.getElementById("password");



nameRegex = /^[A-Za-z\s_-]+$/;
if (!nameAdminInput.value.trim()) return alert("Please enter Admin name.");
if (!nameRegex.test(nameAdminInput.value.trim())) return alert("Name must contain letters and spaces only.");




PasswordRegex = /^[A-Z](?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]).*$/;
if (!PasswordInput.value.trim()) return alert("Please enter Admin password.");
if (!PasswordRegex.test(PasswordInput.value.trim())) return alert("Password must start with uppercase letter and include at least 1 number and 1 special character.");

  

const updatedAdmin = {
    id: idAdminInpute.value.trim(),
    name: nameAdminInput.value.trim(),
    email: EmailInpute.value.trim(),
    password: PasswordInput.value.trim()
  };

  try {
    await fetch(`https://client-side-technology-default-rtdb.firebaseio.com/admins/${keyy}.json`, {
      method: 'PATCH',
      body: JSON.stringify(updatedAdmin),
      headers: { 'Content-Type': 'application/json' }
    });

    clearForm();
    idAdminInpute.readOnly = false
    EmailInpute.readOnly=false
    showAdmins();

    updateButton.classList.add("d-none");
    saveButton.classList.remove("d-none");
  } catch (err) {
    console.error("Error updating admin:", err);
    }
}



function clearForm() {
    let d1 = document.getElementById("id");
    d1.value = '';
    let d2  = document.getElementById("name");
    d2.value = '';
    let d3  = document.getElementById("email");
    d3.value = '';
    let d4  = document.getElementById("password");
    d4.value = '';
  }



  

//NOTE   function that will work when click on All Admins Button
function ShowTable() {
    const tableContainer = document.getElementById("tableContainer");
  
    if (tableContainer.style.display === "none") {
      tableContainer.style.display = "block";
      showAdmins(); 
    } else {
      tableContainer.style.display = "none";
    }
}





//! category Section 


  let nameCategoryInput,  tbodyTableCategory ,idCategoryInpute , updateCategoryButton , saveCategoryButton , keyyCategory , numberCategoryRegex, nameCategoryRegex, categories;

//NOTE - save category
  async function saveCategory() {
    idCategoryInpute=document.getElementById("idCategory")
nameCategoryInput = document.getElementById("nameCategory");

// regex of id 

 numberCategoryRegex = /^\d{1,5}$/;

if(!idCategoryInpute || !idCategoryInpute.value.trim()) return alert("Please enter ID of  category .");
if (!numberCategoryRegex.test(idCategoryInpute.value.trim())) return alert("ID must be between 1 and 5 numbers and must be integer and positive numbers");
for (const key in categories) {
    if (categories[key].id === idCategoryInpute.value.trim()) {
        return alert("This ID has already been used. Please choose a different ID.");
    }
}

    
    // regex of name
nameCategoryRegex = /^[A-Za-z\s_-]+$/;
if (!nameCategoryInput || !nameCategoryInput.value.trim()) return alert("Please enter category name.");
if (!nameCategoryRegex.test(nameCategoryInput.value.trim())) return alert("Category name must contain letters and spaces only (no numbers or symbols).");
for (const key in categories) {
if (categories[key].name === nameCategoryInput.value.trim()) {
    return alert("This Name has already been used,Please choose a different name.");
}
}
// add category 
    const category = {
        id: idCategoryInpute.value,
        name: nameCategoryInput.value };

      try {
        await fetch("https://client-side-technology-default-rtdb.firebaseio.com/category.json", {
            method: 'POST',
            body: JSON.stringify(category),
            headers: { 'Content-Type': 'application/json' }
        });
        idCategoryInpute.value = '';
         nameCategoryInput.value = '';
          clearForm()
        showCategories()
    } catch (err) {
        console.error("Error saving category:", err);
    }  
   
        

       

    
} 

//NOTE - show the table of categories
  async function showCategories(){
    
  tbodyTableCategory = document.getElementById("tbodyCategory");
        if (!tbodyTableCategory) return;
 
        tbodyTableCategory.innerHTML = '';

        //NOTE -  get Categorties

        try {
            const res = await fetch("https://client-side-technology-default-rtdb.firebaseio.com/category.json");
            categories = await res.json();
            // console.log(categories)
            for (const key in categories) {
                const category = categories[key];

                if (!category) continue; 
            
                tbodyTableCategory.innerHTML += `
                <tr>
                    <td>${category.id}</td>
                    <td>${category.name}</td>
                    <td><button class="btn btn-danger" onclick="deleteCategory('${key}')">Delete</button></td>
                    <td><button class="btn btn-success" onclick="prepareUpdateCategory('${key}' ,'${category.id}', '${category.name}')">Update</button></td>
                </tr>`;
            
            
            }
        } catch (error) {
            console.error("Error loading categories:", error);
        }
    

}

//NOTE - show the table of categories when i click on all Categoryies Button

function ShowCategoryTable() {
    const tableContainerr = document.getElementById("tableContainerCategory");
  
    if (tableContainerr.style.display === "none") {
        tableContainerr.style.display = "block";
      showCategories(); 
    } else {
        tableContainerr.style.display = "none";
    }
  }

//NOTE - Delete Category
  async function deleteCategory(id) {
    try {
        await fetch(`https://client-side-technology-default-rtdb.firebaseio.com/category/${id}.json`, {
            method: 'DELETE'
        });
        showCategories();
    } catch (err) {
        console.error("Error deleting category:", err);
    }
}


//NOTE - prepare Inputes for update 

function prepareUpdateCategory(key ,id, name) {
    
   
    updateCategoryButton = document.getElementById("UpdateCategpry");
    saveCategoryButton = document.getElementById("saveCategory");
    idCategoryInpute=document.getElementById("idCategory")
     nameCategoryInput = document.getElementById("nameCategory");

     keyyCategory=key


     idCategoryInpute.value = id;
     nameCategoryInput.value = name;
  
     idCategoryInpute.readOnly = true;
    
    //  make the save button invisable and update button visiable 
    updateCategoryButton.classList.remove("d-none"); 
    saveCategoryButton.classList.add("d-none");       

    
   
    
}


//NOTE -  update category

async function UpdateCategory(){

    idCategoryInpute=document.getElementById("idCategory")
    nameCategoryInput = document.getElementById("nameCategory");
 

    
    // regex of name
nameCategoryRegex = /^[A-Za-z\s_-]+$/;
if (!nameCategoryInput || !nameCategoryInput.value.trim()) return alert("Please enter category name.");
if (!nameCategoryRegex.test(nameCategoryInput.value.trim())) return alert("Category name must contain letters and spaces only (no numbers or symbols).");

  
//    update category
const updatedCategory = { 
    id:idCategoryInpute.value,
    name: nameCategoryInput.value };
try {
    await fetch(`https://client-side-technology-default-rtdb.firebaseio.com/category/${keyyCategory}.json`, {
        method: 'PATCH',
        body: JSON.stringify(updatedCategory),
        headers: { 'Content-Type': 'application/json' }
    });
    clearForm();
    idCategoryInpute.readOnly = false
    
    showCategories();
   
} catch (err) {
    console.error("Error updating category:", err);
}
}



  function clearForm() {
    document.getElementById("idCategory").value = '';
    document.getElementById("nameCategory").value = '';
  }








  








