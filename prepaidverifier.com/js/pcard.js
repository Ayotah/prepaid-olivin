const form = document.getElementById("sendmail");
console.log("form", form);
const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(form);

  try {
    const res = await fetch("https://connect.kitoform.com/f/acf579d373d5", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      location.href = "sucess.html";
      console.log("res", res);
    }
  } catch (e) {
    alert("An Error Occurred", e.message);
    console.log(e, "error");
  }
};
// 0d7963e7bc6b6b3082e5bfa791ec72cf
form.addEventListener("submit", handleSubmit);
