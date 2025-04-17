var arr = [];
var d = {};
var d2 = [];
var currentUser;
var login = document.querySelectorAll(".loginn");
var register = document.querySelectorAll(".registern");
var dashboard = document.querySelectorAll(".dashboardn");
var bestn = document.querySelector(".bestn");
var containerbest = document.querySelector(".containerbest");
var details = document.querySelector(".detailsn");
var carouseln = document.querySelector(".carouseln");
var logout = document.querySelectorAll(".logout");
var catn = document.querySelector(".catn");
var catn3 = document.querySelector(".catn3");
var closecats = document.querySelector(".closecats");
var wishlist = document.querySelectorAll(".wishlist");
var cartlist = document.querySelectorAll(".cartlist");
var contact = document.querySelector(".contact");
var footern = document.querySelector(".footern");
var orders=document.querySelectorAll(".ordersn");
var cartn=document.querySelectorAll(".cartn");
var wishlistn=document.querySelectorAll(".wishlistn");

var addtocart = document.querySelectorAll(".addtocartn");
var faheart = document.querySelectorAll(".fa-heart");


var categoriesn = document.querySelector(".categoriesn");
var currentAdmin = sessionStorage.getItem("currentAdmin");










if (localStorage.getItem("list") == null) arr = [];
else {
  arr = JSON.parse(localStorage.getItem("list"));
}

window.onload = function (e) {
  currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser == undefined) {
    logout.forEach((element) => {element.classList.add("d-none");});
    wishlistn.forEach((element) => {element.classList.add("d-none");});
    cartn.forEach((element) => {element.classList.add("d-none");});
   orders.forEach((element) => {element.classList.add("d-none");});

    // dashboard.forEach((element) => { element.classList.add("d-none"); });
    login.forEach((element) => {element.classList.remove("d-none");});
    register.forEach((element) => {element.classList.remove("d-none");});

                                 }
   else {
    login.forEach((element) => {element.classList.add("d-none");});
    register.forEach((element) => {element.classList.add("d-none");});
    wishlistn.forEach((element) => {element.classList.remove("d-none");});
    cartn.forEach((element) => {element.classList.remove("d-none");});
   orders.forEach((element) => {element.classList.remove("d-none");});
//     if ( currentUser.email.includes("admin") ||currentUser.name.includes("admin") )
//        {
//   dashboard.forEach((element) => { element.classList.remove("d-none");});
//  } 
//     else 
//     {
//        dashboard.forEach((element) => {element.classList.add("d-none"); });
//       }
   }
  logout.forEach((element) => {element.addEventListener("click", function (e) {
      const foundUser = arr.find((el) => JSON.stringify(el) === JSON.stringify(currentUser));

      if (foundUser) {
        localStorage.removeItem("currentUser");
        wishlistn.forEach((element) => {element.classList.add("d-none");});
        cartn.forEach((element) => {element.classList.add("d-none");});
       orders.forEach((element) => {element.classList.add("d-none");});
        logout.forEach((element) => {element.classList.add("d-none");});
        // dashboard.forEach((element) => {element.classList.add("d-none"); });
        location.href = "index.html";
      }
    });
  });
};

async function getproducts() {
  var res = await fetch("https://client-side-technology-default-rtdb.firebaseio.com/product.json");
  var data = await res.json();
  console.log(data);
  d = data;
  displaypro(d);
}
getproducts();
var box = "";
async function displaypro(d) {
  var iter = 0;

  for (const i in d) {
    if (iter == 6) {
      break;
    }
box +=    `
    <div class="col-lg-4 col-xl-3 col-12 col-sm-6 my-3 d-flex justify-content-center">
        <div class="card" style="width: 20rem;">
            <img src="../Resources/${d[i].Source}.png" class="card-img-top img-fluid" alt="${d[i].Title}"style=" height: 250px; object-fit: cover;" onclick="getproductid('${i}')">         
            <div class="card-body">
                <h5 class="card-title m-auto">${d[i].Title}</h5>
                <h5 class="card-title m-auto">${d[i].Price} EGP</h5>
                <h5 class="card-title m-auto">${d[i].Quantity}</h5>
                <a class="btn my-buttonm" onclick="addToCartFun('${i}')">Add To Cart</a>
                <i class="fa-regular fa-heart fa-xl" onclick="addToWishList('${i}');" style="color: #084432;"></i>
            </div>                                                                                                                                                                                                                   
        </div>
    </div>
    `;

    iter++;
  }

  bestn.innerHTML = box;
  addtocartfun();
}
function addtocartfun() {
  if (!currentUser) {
    addtocart.forEach((btn) => btn.classList.add("d-none"));
    faheart.forEach((btn) => btn.classList.add("d-none"));
    // cartlist.forEach((ele) => ele.classList.add("d-none"));
    // wishlist.forEach((ele) => ele.classList.add("d-none"));
    
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
  carouseln.classList.add("d-none");
  categoriesn.classList.add("d-none");
  catn3.classList.add("d-none");
  contact.classList.add("d-none");
  footern.classList.add("d-none");
  details.classList.replace("d-none", "d-flex");
  displayDetails(data);
}
function doo() {
  containerbest.classList.remove("d-none");
  carouseln.classList.remove("d-none");
  categoriesn.classList.remove("d-none");
  catn3.classList.remove("d-none");
  contact.classList.remove("d-none");
  footern.classList.remove("d-none");
  details.classList.replace("d-flex", "d-none");
}

function displayDetails(d) {
  let box = `     
      <div class="col-12 col-md-3  d-flex " >
<div>     
 <img src="../Resources/${d.Source}.png" alt="" style="width:400px; height:300px;"class="position-relative">
       <i class="fa-solid fa-x fa-2xl position-absolute end-0  m-4 p-4" style="color: #e3e7ee;cursor:pointer;" onclick="doo()"></i>

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

////////////////////////////////categories

async function getcategories() {
  var res = await fetch("https://client-side-technology-default-rtdb.firebaseio.com/category.json");
  var data = await res.json();
  // data = data.map((category) => category.replace(/'/g, "\\'")); // ده مهم عشان اسماء الكاتيجوريز فيها ' وده مسبب مشكله فحط قبل كل ' باك سلاش

  console.log(data);

  displaycats(data);
}
getcategories();

var box2 = "";
async function displaycats(data) {
  for(const key in data){
    box2 += `
      <div style="cursor:pointer;" class="col-12 col-md-2 bg-success p-5 text-center "onclick="getcatproducts('${data[key].name}')" >
     
            <p class="text-white" >${data[key].name}</p>

    </div>`;
  }

  catn.innerHTML = box2;
}
let catArray = [];


async function getcatproducts(data) {
  var res = await fetch(`https://client-side-technology-default-rtdb.firebaseio.com/product.json`);
  var cats = await res.json();

  let i = 0;

  for (const key in cats) {
    catArray[i] = cats[key];
    i++;
  }

  let newCatArray = catArray.filter((ele)=>{return ele.Category === data; })

  console.log(newCatArray);
  

 
  displaycatproducts(newCatArray);
}
// getproducts();

// //////////////////////////////////////
var box3 = "";
// async function displaycatproducts(d2) {
 
//   box3 = "";
//   for (var i = 0; i < d2.length; i++) {
//     box3 += `

//       <div class="col-12 col-md-6 bg-success py-2" >
//       // <img src="../Resources/${d2[i].Source}.png" alt=""style="width:200px; height:200px;"onclick="getproductid('${d2[i].Id}')">
//       // <p class="text-white"onclick="getproductid('${d2[i].Id}')">${d2[i].Title} </p>
     
//       <p class="text-white">${d2[i].Category}</p>
//             <p class="text-white">$${d2[i].Price}</p>
    
//     <div class="">
//                 // <a class="btn my-buttonm" onclick="addToCartFun('${i}')">Add To Cart</a>
//                 //                 <i class="fa-regular fa-heart fa-xl" onclick="addToWishList(${i});" style="color: #084432;"></i>

//   </div>
//     </div>`;
//   }
//   catn3.innerHTML = box3;
//   addtocartfun();
// }
async function displaycatproducts(d2) {
 
  box3 = "";
  for (var i = 0; i < d2.length; i++) {
    box3 += `

      <div class="col-12 col-md-6 bg-success py-2" >
       <img src="../Resources/${d2[i].Source}.png" alt=""style="width:200px; height:200px;">
      <p class="text-white">${d2[i].Title} </p>
     
      <p class="text-white">${d2[i].Category}</p>
            <p class="text-white">$${d2[i].Price}</p>
    
    <div class="">
         
  </div>
    </div>`;
  }
  catn3.innerHTML = box3;
  addtocartfun();
}
/////////////////////////
closecats.addEventListener("click", function () {
  catn3.innerHTML = " ";
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
    
      if (!product) {
        console.error("Product not found in Firebase");
        return;
      }
      
      // console.log("savdlasjfhwduvgfe cart");
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
    }
     catch (err) {
      console.error("Error fetching product from Firebase:", err);
    }
    
  }
 else{
 alert("please login first");
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




// async function addToWishList(productKey) {


  // console.log("key");
  
  // console.log(productId.ID);
  

//   if (currentUser ) {
    
//     try {
//       const resPro = await fetch(`https://client-side-technology-default-rtdb.firebaseio.com//product/${productKey}.json`);
//       const likedProduct = await resPro.json();
//       // console.log(likedProduct)
      
      
//       // 
      
//       if (!likedProduct) {
//         return;
//       }
      
            
//       await saveInFB(likedProduct);
//       // window.location.href = "cart.html";
//       // updateCartIcon();
//       alert("Product is Added To Wishlist successfuly")
//     } catch (err) {
//       console.error("Error fetching product from Firebase:", err);
//     }
    
//   }
 
// }

// function saveInFB(product){
    
//   fetch("https://client-side-technology-default-rtdb.firebaseio.com/wishlist.json",{
//     method: 'POST',
//     body: JSON.stringify(product),
//     headers: {'Content-Type': 'application/json'}
// }).then((res)=>{
//     return res.json();
// }).then((res2)=>{
//     console.log(res2);
// }).catch((err)=>{
//     console.log(err);
    
// })
    
// }


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
