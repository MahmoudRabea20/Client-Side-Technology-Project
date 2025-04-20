<<<<<<< HEAD
const listProduct = document.querySelector(".listproduct");
const cartList = document.querySelector(".listcart");
const cartIcon = document.querySelector(".icon-cart span");
const cartTab = document.querySelector(".cartTab");

const totalNumber = document.getElementById("totalNumber");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

let cart = [];

async function ShowCart() {
    const response = await fetch(`https://client-side-technology-default-rtdb.firebaseio.com//cart/${currentUser.name}.json`);
    const data = await response.json();

    console.log(data);

    
    
    if (data) {
      cart = Object.values(data);

      console.log("cart");
      
      console.log(cart[0]);
      
    } else {
      cart = [];
    } updateCart();
    // updateCartIcon();  
   
  }
  ShowCart()

  function updateCart() {
    if (!cartList || !document.getElementById("total")) {
      console.warn("Cart elements not found in the DOM.");
      return;
    }
    if (!window.location.pathname.includes("cart.html")) return;
    cartList.innerHTML = "";
    
    let total = 0;
  
    
        cart.forEach(product => {
            total += product.price * product.quantity;
            console.log(total);
          let item = document.createElement("div");
          item.classList.add("cart-item");
          item.innerHTML = `
            <div><img src="../Resources/${product.source}.png" alt="${product.title}" style="width: 100px;"></div>
            <div>${product.title}</div>
            <div>${product.price * product.quantity} L.E</div>
            <div class="quntity">
              <div class="row align-items-center">
                <div class="col-md-9 d-flex gap-2 align-items-center">
                  <button onclick="changeQuantity('${product.id}', -1)" class="btn btn-primary">
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <span class="mt-2">${product.quantity}</span>
                  <button onclick="changeQuantity('${product.id}', 1)" class="btn btn-primary">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div class="col-md-3">
                  <button onclick="DeleteCart('${product.id}')" class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
            <hr>
          `;
          cartList.appendChild(item);
        });
        
    
        
  
      
    
      totalNumber.innerText = total;
    
}


async function DeleteCart(productId) {
    cart = cart.filter(function(p){
      return p.id !== productId;
    });
    updateCart();
    await saveCart();
  }


 function changeQuantity(productId, change) {
  let product = cart.find(p => p.id === productId);
  if (!product) return;

  product.quantity += change;
  if (product.quantity <= 0) {
    cart = cart.filter(p => p.id !== productId);
  }
  updateCart();
   saveCart();
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

  async function checkout() {
    if(cart.length === 0) return alert("Cart is empty!");
  
    const username = currentUser.name;
    const order = {
      userName: username, 
      cartItems: cart,
      status: "pending",
      timestamp: new Date().getTime()
    };
  
  
  
    try {
      await fetch("https://client-side-technology-default-rtdb.firebaseio.com/order.json", {
        method: "POST",
        body: JSON.stringify(order),
        headers: { "Content-Type": "application/json" }
      });
  
      alert("Order sent successfully!");
       emptyCart()
       setTimeout(() => {
        window.location.href = "../Pages/test.html";
      }, 1000);
     
      // updateCart();
      
      
      
    } catch (err) {
      console.error("Error submitting order", err);
    }
}

async function emptyCart() {
  cart = [];
  // updateCartIcon();
  if (window.location.pathname.includes("cart.html")) {
    updateCart();
  }

 await saveCart();
}

=======


>>>>>>> 2a4a1dd5b82ce9b4cf41194ada99a790dca78003
