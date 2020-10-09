export function ValidateEmail() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (this.emailField == null || this.emailField === "") {
    document.querySelector(".form-output").classList.remove("hidden");
    this.error = "Plase, complete this field";
    document.querySelector("#email").style.borderBottom = "1px solid red";
  } else if (!re.test(this.emailField)) {
    document.querySelector(".form-output").classList.remove("hidden");
    this.error = "Invalid e-mail";
    document.querySelector("#email").style.borderBottom = "1px solid red";
  } else {
    document.querySelector(".form-output").classList.add("hidden");
    this.error = null;
    document.querySelector("#email").style.borderBottom =
      "1px solid #58595b";
    return true;
  }

  return false;
}