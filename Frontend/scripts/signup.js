let form = document
  .getElementById("form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    register();
  });

async function register() {
  let signupData = {
    name: document.getElementById("name").value,
    gender: document.getElementById("gender").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    password: document.getElementById("password").value,
    role: document.getElementById("role").value,
  };

  console.log(signupData);
  //   signupData = JSON.stringify(signupData);

  let siguupUrl = "http://localhost/8888/register";

  let response = await fetch(siguupUrl, {
    method: "POST",

    body: JSON.stringify(signupData),

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();

  console.log(data);
}
