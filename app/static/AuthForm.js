let loginBtn, registerBtn, form

window.onload = function() {
    loginBtn = document.getElementById('login_btn');
    registerBtn = document.getElementById('register_btn');
    form = document.getElementById('form');
}
if (loginBtn){

    loginBtn.onclick = (event) => {
            form.action = event.target.dataset.endpoint;
            console.log(form.action);
        }
}

if (registerBtn) {

    registerBtn.onclick = (event) => {
        form.action = event.target.dataset.endpoint;
        console.log('register');
    }
}

