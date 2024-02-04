

// fetching the header and footer content dynamically using JavaScript
// creating the header and footer in every page also with createElement method
// prepend for the header and appendChild for footer to make it stick to top and bottom respectively
fetch("./header.html")
  .then((response) => response.text())
  .then((headerContent) => {
    const header = document.createElement("header");
    header.innerHTML = headerContent;
    document.body.prepend(header);
});


fetch("./footer.html")
  .then((response) => response.text())
  .then((footerContent) => {
    const footer = document.createElement("footer");
    footer.innerHTML = footerContent;
    document.body.appendChild(footer);
});

document.addEventListener("DOMContentLoaded", function () {
      // Get all the images on the page
      var images = document.querySelectorAll("img");

      // Loop through each image and set the alt attribute
      images.forEach(function (image, index) {
        image.alt = "Image " + (index + 1); 
      });
    });

const email1= "admin@admin.com";
const password1= "123456";
function loginInfo() {
  const email2 = document.getElementById("loginEmail").value;
  const password2 = document.getElementById("loginPassword").value;
  if(email1 === email2 && password1 === password2){
    alert("Login successful");
  }else{
    alert("Incorrect email or password");
  }
}
