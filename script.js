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
