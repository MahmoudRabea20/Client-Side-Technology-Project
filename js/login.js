var emailinput = document.getElementById("emailinput");
var passwordinput = document.getElementById("passwordinput");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var loginbutton = document.getElementById("loginbutton");
var signupbutton = document.getElementById("signupbutton");
var signinbutton = document.getElementById("signinbutton");
var login = document.getElementById("login");
var register = document.getElementById("register");
var homepage = document.getElementById("homepage");
var warning = document.getElementById("warning");
var arr;
var currentAdmin;

if (localStorage.getItem("list") == null)
    arr=[];
else {
  arr = JSON.parse(localStorage.getItem("list"));
}

  signinbutton.onclick = function () {
      display2();
    }
    function display2() {
    location.href="./register.html";
  }
loginbutton.onclick = async function () {

  const result = await check(); // Wait for async check
    if (result === "user") {
      clear2();
      console.log("welcome user");
        location.href="./index.html";

    } else if (result === false) {
        var box = `   <div class="alert alert-light p-2 ">
        <small class="fw-bolder">Invalid email OR Password</small>
        </div> `;
        warning.innerHTML = box;
    }

    else if (result === "admin"){
      console.log("welcome admin");
      location.href="../Pages/AddProduct.html";

    }
  }
  async function check() {

    let checkUser = emailinput.value ;
    let isValidAdmin = false;
    let isValidUser = false;

    if(checkUser.startsWith("admin"))
    {
      console.log("admin");
      
      try{
        let res = await fetch("https://client-side-technology-default-rtdb.firebaseio.com/admins.json");
        let admins = await res.json(); 

        for (const key in admins) {

          console.log(admins[key].email);
          console.log(emailinput.value);
          console.log(admins[key].password);
          console.log(passwordinput.value);
          if(admins[key].email == emailinput.value && admins[key].password == passwordinput.value ){
            isValidAdmin = true;
          }
            
        }

      } catch (error){
          console.log(error);
      }

    }
    else {
      var currentUser = arr.find((el) => {
        return el.email == emailinput.value && el.password ==  passwordinput.value;
         });

        if (currentUser == undefined) {
          isValidUser = false;
        }
        else {
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
    
            isValidUser = true;
        }


    }


    if(isValidAdmin === true && isValidUser == false){
      console.log("admin");

      currentAdmin = {
        email: emailinput.value,
        password: passwordinput.value
      }

      sessionStorage.setItem("currentAdmin",JSON.stringify(currentAdmin));

      return "admin";
      
    }
    else if (isValidAdmin === false && isValidUser == true){
      console.log("user");
      return "user";
    }
    else if (isValidAdmin === false && isValidUser == false){
      console.log("false");
      return false;
    }


    

      
    
  }


  function clear2() {
    emailinput.value = "";
    passwordinput.value = "";
  } var inputn = document.querySelector(".inputn");


  inputn.addEventListener("input", function () {
    this.classList.add("text-white");
  });
  var inputn2 = document.querySelector(".inputn2");


  inputn2.addEventListener("input", function () {
    this.classList.add("text-white");
  });
 