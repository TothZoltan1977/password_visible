let eyeicon = document.getElementById('eye-icon');
let pass = document.getElementById('password');


eyeicon.addEventListener('click', hideorshow)

function hideorshow(){
    if (pass.type === "password") {
        pass.type="text";
        eyeicon.src = ""
    } else {
        pass.type="password";
        eyeicon.src = ""
    }
}