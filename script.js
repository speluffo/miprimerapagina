function showAlert() {
    alert("Hola Este es una alerta de JavaScript")
}

const form = document.getElementById("myForm")

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function valideForm() {
    const input = document.getElementById("email")
    const inputValue = input.ariaValueMax

    if (velidateEmail(inputValue)) {
        alert("Por favor ingrese uncorreo valido")
    }   else {
        alert("Correo Electronico Enviado")
    }
}

form.addEventListener("submit", function(lala) {
    lala.preventDefault()
    validateForm();
})

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
}
)

