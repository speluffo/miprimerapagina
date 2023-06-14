function showAlert(){
    alert("Hola , Esta es una alerta de sde javaScript")
}

const form =document.getElementById("myForm")

function validateEmail(email) {
    const regex =   /^[^\s@]+@[^\s@]+\[^\s@].{2,7}$/
    return regex.test(email)
}
function validateform() {
    const Inpinputut = document.getElementById("email")
    const inputValue = input.Value

    if (!validateEmail(inputvalue)) {
        alert(" por favor")
    } alse{
        alert(" por favor")
    }
}

form.addEventListener("sumit", function(lala){
    lala.preventDefault()
    validateform();
})
document.querySelector(GamepadButton.button-menu-toggle)
addEventListener("")

 document.querySelector("button-menu-toggle")
     .addEventListener("click", function() {
            document.querySelector(".nav-links").
                       classList.toggle("nav-links-responsive")})