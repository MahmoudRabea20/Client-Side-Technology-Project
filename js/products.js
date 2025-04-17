var arr = [];
var newArray = [];
var d = {};
var currentUser;
var login = document.querySelectorAll(".loginn")
var register = document.querySelectorAll(".registern")
var dashboard = document.querySelectorAll(".dashboardn")
var logout = document.querySelectorAll(".logout");
var bestn = document.querySelector(".bestn");
var containerbest = document.querySelector(".containerbest");
var details = document.querySelector(".detailsn");
var searchn = document.querySelector(".searchn");
var carouseln = document.querySelector(".carouseln");
var productsn = document.querySelector(".productsn");
var inputn = document.querySelector(".inputsearchn");
var inputnbyprice = document.querySelector(".inputsearchnbyprice");
var orders=document.querySelectorAll(".ordersn");
var cartn=document.querySelectorAll(".cartn");
var wishlistn=document.querySelectorAll(".wishlistn");

inputn.addEventListener("input", function () {
  this.classList.add("text-white");
});
inputnbyprice.addEventListener("input", function () {
  this.classList.add("text-white");
});

if (localStorage.getItem("list") == null) arr = [];
else {
  arr = JSON.parse(localStorage.getItem("list"));
}

window.onload = function (e) {
  currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser == undefined) {
    logout.forEach(element => { element.classList.add("d-none"); });
    // dashboard.forEach(element => { element.classList.add("d-none"); });

    login.forEach(element => { element.classList.remove("d-none"); });
    register.forEach(element => { element.classList.remove("d-none"); });
    wishlistn.forEach((element) => {element.classList.add("d-none");});
    cartn.forEach((element) => {element.classList.add("d-none");});
   orders.forEach((element) => {element.classList.add("d-none");});

  } else {
    login.forEach(element => { element.classList.add("d-none"); });
    register.forEach(element => { element.classList.add("d-none"); });
    wishlistn.forEach((element) => {element.classList.remove("d-none");});
    cartn.forEach((element) => {element.classList.remove("d-none");});
   orders.forEach((element) => {element.classList.remove("d-none");});
    // if (currentUser.email.includes("admin") || currentUser.name.includes("admin")) {
    //   dashboard.forEach(element => { element.classList.remove("d-none"); });

    // } else {
    //   dashboard.forEach(element => { element.classList.add("d-none"); });

    // }
  }
  logout.forEach(ele => {
    
    ele.addEventListener("click", function (e) {
  
      const foundUser = arr.find((el) => JSON.stringify(el) === JSON.stringify(currentUser));
  
      if (foundUser) {
  
        localStorage.removeItem("currentUser");
        logout.forEach(element => { element.classList.add("d-none"); });
        // dashboard.forEach(element => { element.classList.add("d-none"); });
        wishlistn.forEach((element) => {element.classList.add("d-none");});
        cartn.forEach((element) => {element.classList.add("d-none");});
       orders.forEach((element) => {element.classList.add("d-none");});
        location.href = "index.html";
  
      }
    });
  });
  async function getproducts() {
    var res = await fetch("https://client-side-technology-default-rtdb.firebaseio.com/product.json");
    var data = await res.json();

    
    console.log(data);
    d = data;
    displaypro(d);
  }
  getproducts();
};



var box = "";
async function displaypro(d) {
  box = "";

  for(const i in d){
    box += `
      <div class="col-12 col-md-3 bg-success" >
      <img src="../Resources/${d[i].Source}.png" alt=""style="width:200px; height:200px;"onclick="getproductid('${i}')">
      <p class="text-white"onclick="getproductid('${d[i].ID}')">title: ${d[i].Title} </p>
           <p class="text-white">category: ${d[i].Category}</p>
            <p class="text-white">price :$${d[i].Price}</p>
     <p class="text-white">count :${d[i].Quantity}</p>
    <div class="d-flax">
    <button class="addtocartn" onclick="addToCartFun('${i}')">Add to cart</button>
    <i class="fa-regular fa-heart fa-xl" style="color: #084432;" onclick="addToWishList('${i}');"></i>
  </div>
    </div>`

  }

  bestn.innerHTML = box;

  let i = 0;

  for(const key in d) {
      newArray[i] = d[key];
      i++;
  }
  addtocartfun();
}
function addtocartfun() {
  if (!currentUser) {

    var addtocart = document.querySelectorAll(".addtocartn");
    var faheart = document.querySelectorAll(".fa-heart");

    addtocart.forEach(btn => btn.classList.add("d-none"));
    faheart.forEach(btn => btn.classList.add("d-none"));
  }


}
//////////////////////////////////////
async function getproductid(id) {


  const url = `https://client-side-technology-default-rtdb.firebaseio.com/product/${id}.json`;

  let response = await fetch(url);
  let data = await response.json();


  undoo(data);
  console.log(data);


}
function undoo(data) {

  containerbest.classList.add("d-none");
  inputn.classList.add("d-none");
  inputnbyprice.classList.add("d-none");

  details.classList.replace("d-none", "d-flex");
  displayDetails(data);
}
function doo(data) {

  containerbest.classList.remove("d-none");
  details.classList.replace("d-flex", "d-none");
  inputn.classList.remove("d-none");
  inputnbyprice.classList.remove("d-none");
  displayDetails(data);
}

function displayDetails(d) {
  let  box = `     
  <div class="col-12 col-md-3  d-flex " >
<div>     
<img src="../Resources/${d.Source}.png" alt="" style="width:400px; height:300px;"class="position-relative">
   <i class="fa-solid fa-x fa-2xl position-absolute end-0  m-4 p-4" style="color: #e3e7ee;" onclick="doo('${d}')"></i>

</div>  
</div> 
<p class="text-white">title: ${d.Title} </p>
   <p class="text-white">category: ${d.Category}</p>
    <p class="text-white">description: ${d.Description}</p>
      <p class="text-white">price: $${d.Price}</p>
 <p class="text-white">count :${d.Quantity}</p>

<div>



</div>


`;
  details.innerHTML = box;
}
//////////////////////////search

/***
let inp = document.getElementById("search"); 

inp.addEventListener("input", function(e){

    
    let productsDiv = document.getElementById("my-pro"); change
    productsDiv.innerHTML = ""; //change

    let val = e.target.value;
    
    


    fetch("https://client-side-technology-default-rtdb.firebaseio.com/product.json")
    .then((res)=>{
        return res.json();
    }).then((res2)=>{
        // console.log(res2);
        

        for (const key in res2) {
            // console.log(res2[key]);

            let text = res2[key].Title;
            if(val=="")
            {
                productsDiv.innerHTML = "";

            }
            else if( text.includes(val) ){

 * ***/

inputn.addEventListener("input", function () {

  const searchterm = inputn.value.toLowerCase();

  console.log(searchterm);
  const filtered = newArray.filter((product) =>
    product.Title.toLowerCase().includes(searchterm)
  );

  console.log(filtered);

  displaypro(filtered);
});
inputnbyprice.addEventListener("input", function () {

  

  const searchterm2 = inputnbyprice.value;
  console.log(searchterm2);
  const filtered = newArray.filter((product) =>
    product.Price.toString().includes(searchterm2)
  );

  console.log(filtered);

  displaypro(filtered);
});



let cart = [];

async function addToCartFun(productId) {


  console.log("key");
  
  console.log(productId.ID);
  

  if (currentUser ) {
    
    try {
      const productRes = await fetch(`https://client-side-technology-default-rtdb.firebaseio.com//product/${productId}.json`);
      const product = await productRes.json();
      console.log(product)
      
      
      // 
      
      if (!product) {
        console.error("Product not found in Firebase");
        return;
      }
      
      console.log("savdlasjfhwduvgfe cart");
      console.log(product.ID)
    let item = cart.find(p => p.id === product.ID);
    if (item) {
      item.quantity++;
    } else {
      cart.push({
        id: product.ID,
        title: product.Title,
        price: product.Price,
        quantity: 1,
        source: product.Source
      });}



      
      
      
      await saveCart();
      // window.location.href = "cart.html";
      // updateCartIcon();
      alert("Product Add successfuly")
    } catch (err) {
      console.error("Error fetching product from Firebase:", err);
    }
    
  }
 
}



async function saveCart() {
  
  // if (!currentUser ) return;
  console.log("save cart");
  
  
  
  try {
  await fetch(`https://client-side-technology-default-rtdb.firebaseio.com//cart/${currentUser.name}.json `, {
    method: 'PUT',
    body: JSON.stringify(cart),
    headers: { 'Content-Type': 'application/json' }
  });
  console.log("Cart saved successfully");
} catch (err) {
  console.error("Error saving cart:", err);
}
}


async function addToWishList(productKey) {


  console.log("here");
  
  console.log(productKey);  
  if (currentUser ) {
    
    try {
      const resPro = await fetch(`https://client-side-technology-default-rtdb.firebaseio.com//product/${productKey}.json`);
      const likedProduct = await resPro.json();

      /////

      const res = await fetch("https://client-side-technology-default-rtdb.firebaseio.com/wishlist.json")
      const res2 = await res.json()
        

        for (const key in res2) {

          if(res2[key].ID === likedProduct.ID) {
            alert("The product is added before.")
            return;
          }
           
        }




      // console.log(likedProduct)
      
      
      // 
      
      if (!likedProduct) {
        return;
      }
      
            
      await saveInFB(likedProduct);
      // window.location.href = "cart.html";
      // updateCartIcon();
      alert("Product is Added To Wishlist successfuly")
    } catch (err) {
      console.error("Error fetching product from Firebase:", err);
    }
    
  }
 
}

function saveInFB(product){
    
  fetch("https://client-side-technology-default-rtdb.firebaseio.com/wishlist.json",{
    method: 'POST',
    body: JSON.stringify(product),
    headers: {'Content-Type': 'application/json'}
}).then((res)=>{
    return res.json();
}).then((res2)=>{
    console.log(res2);
}).catch((err)=>{
    console.log(err);
    
})
    
}