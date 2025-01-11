const cartIcon = document.getElementById("cart-icon");
const userIcon = document.getElementById("user-icon");
const closeCart = document.getElementById("close-cart");

// * User Account Dropdown Menu

userIcon.addEventListener("click", function () {
  var accountDiv = document.getElementById("userAccount");
  if (accountDiv.style.display === "none" || accountDiv.style.display === "") {
    accountDiv.style.display = "block";
  } else {
    accountDiv.style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  var isClickInside = userIcon.contains(event.target);
  if (!isClickInside) {
    document.getElementById("userAccount").style.display = "none";
  }
});

// Sign In Button

const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");

signInBtn.addEventListener("click", function () {
  document.getElementById("signInBox").style.display = "block";
  document.getElementById("overlay").style.display = "block";
});

document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("signInBox").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});

// Sign Up Button

signUpBtn.addEventListener("click", function () {
  document.getElementById("signUpBox").style.display = "block";
  document.getElementById("overlay").style.display = "block";
});

document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("signUpBox").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});

// Cart Icon 

cartIcon.addEventListener("click", function () {
  var cartDiv = document.getElementById("shopping-cart");
  if (cartDiv.style.display === "none" || cartDiv.style.display === "") {
    cartDiv.style.display = "block";
  } else {
    cartDiv.style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  var isClickedInside = cartIcon.contains(event.target);
  var isCartClick = document.getElementById("shopping-cart").contains(event.target);
  if (!isClickedInside && !isCartClick) {
    document.getElementById("shopping-cart").style.display = "none";
  }
});

closeCart.addEventListener("click", () => {
  cartDiv = document.getElementById("shopping-cart");
  cartDiv.style.display = "none";
});