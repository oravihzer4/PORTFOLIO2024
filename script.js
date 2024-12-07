function greetFn() {
  let userNameInput = document.getElementById("userNameInput");

  document.getElementById("resultSpan").innerHTML = "Loading.";

  setTimeout(() => {
    document.getElementById("resultSpan").innerHTML = "Loading..";
  }, 1000);
  setTimeout(() => {
    document.getElementById("resultSpan").innerHTML = "Loading...";
  }, 2000);

  setTimeout(() => {
    document.getElementById(
      "resultSpan"
    ).innerHTML = `function greeting(name)  {
    console.log("Hello World " + name);
  }
    <br>
  greeting(name)`;
  }, 3000);
  setTimeout(() => {
    alert(`Welcome ${userNameInput.value}, So happy to see you here:)`);
    userNameInput.value = "";
    document.getElementById("resultSpan").innerHTML = "";
  }, 4000);
}

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
