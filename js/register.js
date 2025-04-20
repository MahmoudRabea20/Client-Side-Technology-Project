var emailinput = document.getElementById("emailinput");
var passwordinput = document.getElementById("passwordinput");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var loginbutton = document.getElementById("loginbutton");
var signupbutton = document.getElementById("signupbutton");
var signup = document.getElementById("signup");
var signinbutton = document.getElementById("signinbutton");
var login = document.getElementById("login");
var register = document.getElementById("register");
var homepage = document.getElementById("homepage");
var warning = document.getElementById("warning");
var arr;

if (localStorage.getItem("list") == null) arr = [];
else {
  arr = JSON.parse(localStorage.getItem("list"));
}
signupbutton.onclick = function () {
    add();
    if (validate(input1) && validate(input2) && validate(input3)) {
      clear();
      display();
    }
  };
  signinbutton.onclick = function () {
    display();
  };
  
  function add() {
    if (validate(input1) && validate(input2) && validate(input3)) {
      var obj = {
        name: input1.value,
        email: input2.value,
        password: input3.value,
      };
      arr.push(obj);
      localStorage.setItem("list", JSON.stringify(arr));
      console.log(arr);
    }
  }
  
  function display() {
location.href="./login.html";
  }
  
  function clear() {
    input1.value = "";
    input2.value = "";
    input3.value = "";
  }
  
  function validate(ele) {
    var regex = {
      input1: /^[\w]{3,10}$/,
      input2: /^[a-zA-z]{4,15}(\@)(gmail|yahoo)(\.com)$/,
      input3: /^.{5,15}$/,
    };
    if (regex[ele.id].test(ele.value)) {
      console.log("match");
      ele.nextElementSibling.classList.replace("d-block", "d-none");
      ele.classList.remove("is-invalid");
      ele.classList.add("is-valid");
      return true;
    } else {
      console.log("not match");
      ele.nextElementSibling.classList.replace("d-none", "d-block");
      ele.classList.add("is-invalid");
      ele.classList.remove("is-valid");
      return false;
    }
  }
  /////////////////////////////////////////////
var inputn = document.querySelector(".inputsn");
inputn.addEventListener("input", function () {
    this.classList.add("text-white");
  });
  var inputn2 = document.querySelector(".inputsn2");


  inputn2.addEventListener("input", function () {
    this.classList.add("text-white");
  });
  var inputn3 = document.querySelector(".inputsn3");


  inputn3.addEventListener("input", function () {
    this.classList.add("text-white");
  });

