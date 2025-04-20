document.addEventListener("DOMContentLoaded", getWishList);

function getWishList(){
    let productsDiv = document.getElementById("my-wish");
    
    productsDiv.innerHTML = "";

    productsDiv.innerHTML = `
        <div id="my-wish" class="row my-wishm d-flex justify-content-center pt-3 ">
            <div  class="col-12">
                <div class="text-center my-3">
                    <h1>Wish List</h1>
                </div>
            </div>
            
        </div>
    
    `;

    


    fetch("https://client-side-technology-default-rtdb.firebaseio.com/wishlist.json")
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
                        <a class="btn my-buttonm" onclick="unlikeProduct('${key}');">Unlike Product</a>
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

function unlikeProduct(id){

    let isConfirm = confirm("Do you want to unlike this product?");

<<<<<<< HEAD
    console.log("hwweheeeh");
    console.log(id);
    
    

=======
>>>>>>> cd09c8ae40ff0bea69656f2744bb6048a6836892
    if(isConfirm){
        fetch(`https://client-side-technology-default-rtdb.firebaseio.com/wishlist/${id}.json`,{
            method: 'DELETE'
        }).then((res2)=>{
            console.log(res2);
        }).catch((err)=>{
            console.log(err);
            
        })
        setTimeout(getWishList,500);
    }



}