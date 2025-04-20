// let nameInput,  tbody ,idInpute , updateButton , saveButton , keyy , numberRegex, nameRegex, Admins , EmailInpute ,PasswordInput , admins;


// async function saveAdmin() {

// idInpute=document.getElementById("id")
// nameInput = document.getElementById("name");
// EmailInpute=document.getElementById("email")
// PasswordInput=document.getElementById("password")

// // regex of id 

//  numberRegex = /^\d{1,5}$/;

// if(!idInpute || !idInpute.value.trim()) return alert("Please enter ID of  Admin ");
// if (!numberRegex.test(idInpute.value.trim())) return alert("ID must be between 1 and 5 numbers and must be integer and positive numbers");
// for (const key in admins) {
//     if (admins[key].id === idInpute.value.trim()) {
//         return alert("This ID has already been used. Please choose a different ID.");
//     }
// }

    
//     // regex of name
// nameRegex = /^[A-Za-z\s_-]+$/;
// if (!nameInput || !nameInput.value.trim()) return alert("Please enter Admin name.");
// if (!nameRegex.test(nameInput.value.trim())) return alert("Category name must contain letters and spaces only (no numbers or symbols).");
// for (const key in admins) {
// if (admins[key].name === nameInput.value.trim()) {
//     return alert("This Name has already been used,Please choose a different name.");
// }
// }
//  // regex of email
// const emailRegex = /^admin[A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.com$/i;
// if(!EmailInpute||!EmailInpute.value.trim()) return alert("Please enter Email of Admin ");
// if (!emailRegex.test(EmailInpute.value.trim())) return alert("Email should start with Admin and end with .com");
// for (const key in admins) {
//     if (admins[key].email === EmailInpute.value.trim()) {
//         return alert("This Email has already been used,Please choose a different Email.");
//     }

// // regex of Password
// const PasswordRegex=/^[A-Z](?=.*\d)(?=.*[@*?])[A-Za-z\d@*?]{7,}$/

// if(!PasswordInput||!PasswordInput.value.trim()) return alert("Please enter Email of Admin ");
// if (!PasswordRegex.test(PasswordInput.value.trim())) return alert("The password must start with an uppercase letter ,");


// // add category 
//     const Admin = {
//         id: idInpute.value,
//         name: nameInput.value,
//          email:EmailInpute.value ,
//         password: PasswordInput.value};
        

//       try {
//         await fetch("https://client-side-technology-default-rtdb.firebaseio.com/admins.json", {
//             method: 'POST',
//             body: JSON.stringify(Admin),
//             headers: { 'Content-Type': 'application/json' }
//         });
//         idInpute.value = '';
//          nameInput.value = '';
//               EmailInpute.value='';
//               PasswordInput.value=' ';

//         const homeTab = document.querySelector('[data-content="home"]');
//             homeTab.click();
//     } catch (err) {
//         console.error("Error saving category:", err);
//     }  
// }
// }
       
    
//     // display categories 
// async function showAdmins() {

//         tbody = document.getElementById("tbody");
//         if (!tbody) return;

//         tbody.innerHTML = '';
//         try {
//             const res = await fetch("https://client-side-technology-default-rtdb.firebaseio.com/admins.json");
//             admins = await res.json();
//             // console.log(categories)
//             for (const key in admins) {
//                 const admin = admins[key];

//                 if (!admin) continue; 
            
//                 tbody.innerHTML += `
//                 <tr>
//                     <td>${admin.id}</td>
//                     <td>${admin.name}</td>
//                     <td>${admin.email}</td>
//                     <td>${admin.password}</td>
//                     <td><button class="btn btn-danger" onclick="deleteAdmin('${key}')">Delete</button></td>
//                     <td><button class="btn btn-success" onclick="prepareUpdate('${key}' ,'${admin.id}', '${admin.name}','${admin.email}','${admin.password}')">Update</button></td>
//                 </tr>`;
            
            
//             }
//         } catch (error) {
//             console.error("Error loading categories:", error);
//         }
//     }


// //    delete admin 
// async function deleteAdmin(id) {
//     try {
//         await fetch(`https://client-side-technology-default-rtdb.firebaseio.com/admins/${id}.json`, {
//             method: 'DELETE'
//         });
//         showAdmins();
//     } catch (err) {
//         console.error("Error deleting category:", err);
//     }
// }




// function prepareUpdate(key ,id, name , email, password) {
//     // navigate to add Category tab
//     const addTab = document.querySelector('[data-content="about"]');
//     addTab.click();
//     updateButton = document.getElementById("Update");
//     saveButton = document.getElementById("save");
//      keyy=key
    
//     //  make the save button invisable and update button visiable 
//     updateButton.classList.remove("d-none"); 
//     saveButton.classList.add("d-none");       

//     setTimeout(() => {
//         idInpute = document.getElementById("id");
        
//         nameInput = document.getElementById("name");
//         EmailInpute=document.getElementById("email");
//         PasswordInput=document.getElementById("password");
//         if (idInpute && nameInput && EmailInpute && PasswordInput) {
//             idInpute.value = id;
//             nameInput.value = name;
//             EmailInpute.value = email;
//             PasswordInput.value = password;
//             idInpute.readOnly = true;
//         }
//     }, 100);
    
// }


// // update category
// async function UpdateAdmin(){

// idInpute=document.getElementById("id")
// nameInput = document.getElementById("name");
// EmailInpute=document.getElementById("email")
// PasswordInput=document.getElementById("password")

// // regex of id 
//  numberRegex = /^\d{1,5}$/;

// if(!idInpute || !idInpute.value.trim()) return alert("Please enter ID of  category .");
// if (!numberRegex.test(idInpute.value.trim())) return alert("ID must be between 1 and 5 numbers and must be integer and positive numbers");
    
    
// // regex of name
// nameRegex = /^[A-Za-z\s_-]+$/;
// if (!nameInput || !nameInput.value.trim()) return alert("Please enter category name.");
// if (!nameRegex.test(nameInput.value.trim())) return alert("Category name must contain letters and spaces only (no numbers or symbols).");

  

// const updateAdmin = { 
//     id:idInpute.value,
//     name: nameInput.value ,
//  email:EmailInpute.value,
// password: PasswordInput.value };
// try {
//     await fetch(`https://client-side-technology-default-rtdb.firebaseio.com/admins/${keyy}.json`, {
//         method: 'PATCH',
//         body: JSON.stringify(updateAdmin),
//         headers: { 'Content-Type': 'application/json' }
//     });
//     const homeTab = document.querySelector('[data-content="home"]');
//     homeTab.click();
//     console.log(keyy)
// } catch (err) {
//     console.error("Error updating category:", err);
// }
// }

       

    








// document.addEventListener('DOMContentLoaded', function () {
//     const tabLinks = document.querySelectorAll('.tab-link');
//     const contentDisplay = document.getElementById('content-display');

//     const contentData = {
//         home: `<div class="container "> 
            
//             <table class="table  table-striped  rounded-3  table-hover">
//                 <thead> 
//                     <tr>
//                       <th>ID</th>
//                           <th>Name</th>   
//                           <th>Email</th>   
//                           <th>Password</th>   
//                           <th>Delete</th>   
//                           <th>Update</th>   
//                     </tr>
//                 </thead>
//                 <tbody id="tbody"></tbody>
//             </table>
//         </div>`,
//         about: `
//         <div class="container w-75 mx-auto">
//             <div class="mb-3">
//                 <label class="form-label">ID</label>
//                 <input type="number" class="form-control" id="id">
//             </div>
//             <div class="mb-3">
//                 <label class="form-label">Name</label>
//                 <input type="text" class="form-control" id="name">
//             </div>
//             <div class="mb-3">
//                 <label class="form-label">Email</label>
//                 <input type="email" class="form-control" id="email">
//             </div>
//             <div class="mb-3">
//                 <label class="form-label">Password</label>
//                 <input type="password" class="form-control" id="password">
//             </div>
//             <button class="btn btn-primary" id="save" onclick="saveAdmin()">Save</button>
//             <button class="btn btn-primary d-none" id="Update" onclick="UpdateAdmin()">Update</button>
            
//         </div>`,
        
        
//     };

  
//     tabLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             tabLinks.forEach(l => l.classList.remove('active'));
//             this.classList.add('active');
//             const selected = this.getAttribute('data-content');
//             contentDisplay.innerHTML = contentData[selected] || '';
//             if (selected === 'home') showAdmins();
//         });
//     });

  
//    showAdmins();
// })

