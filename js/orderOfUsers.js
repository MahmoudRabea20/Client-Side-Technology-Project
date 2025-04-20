let currentUser = JSON.parse(localStorage.getItem("currentUser"));


async function Orders() {
    let index=1;
    const userName = currentUser.name;
    const container = document.getElementById("myOrders");
    if (!container) return;
  
    container.innerHTML = "";
  
    try {
      const res = await fetch("https://client-side-technology-default-rtdb.firebaseio.com/order.json");
      const data = await res.json();
  
      let hasOrder = false;
  
      for (const key in data) {
        const order = data[key];
  
    if (!order || order.userName !== userName) continue;
  
        hasOrder = true;
  
     
        let statusClass = "text-bg-secondary";
        if (order.status === "accepted" || order.status === "success") {
          statusClass = "text-bg-success";
        } else if (order.status === "rejected") {
          statusClass = "text-bg-danger";
        }
  
     
        const div = document.createElement("div");
        div.className = "col";
        div.innerHTML = `
  
        <div class="card quote-card w-" style="max-width: 400px; height:80%;">
      <div class="quote-icon">
        ${index}
      </div>
      <div class="card-body text-center">
      <div class="text-center ">
      <p class="badge ${statusClass} w-50 ">Status: <strong>${order.status}</strong></p>
      </div>
        
              
        <hr class="mt-2">
        <footer class=" author">
        <ul style="list-style: none; list-style-type: none;" class="">
             
                ${order.cartItems.map(item => `<li>${item.title} - ${item.price} EGP  <span class="bg-info p-2 w-100 rounded-2"> ${item.quantity}</span>  </li>`)}
              </ul>
           <div class="my-2"> <span class="p-2 rounded-2 bg-info">Date</span> <span>${new Date(order.timestamp).toLocaleString()}</span></div>
              </footer>
      </div>
    </div>
         
        `;
        index++;
        container.appendChild(div);
      }
  
      if (!hasOrder) {
        container.innerHTML = "<p>No orders found.</p>";
      }
      
    } catch (error) {
      console.error("Error loading orders:", error);
      container.innerHTML = "<p>Error loading orders.</p>";
    }
  }
  
  
  
  
  Orders();