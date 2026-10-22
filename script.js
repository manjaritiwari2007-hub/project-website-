
const button = document.querySelector(".btn");

button.addEventListener("click", function(event) {
  event.preventDefault();

  document.querySelector("#about").scrollIntoView({
    behavior: "smooth"
  });

  alert("Welcome to our College Project!");
});
