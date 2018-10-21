const form = document.querySelector('form');
const btnLogar = document.querySelector('#logar');
const URL = '';

validaCampos(form);
form.addEventListener("input", (e) =>{
    if (form.email.value && String(form.password.value).length >= 8) {
    btnLogar.removeAttribute('disabled');
}
else {
    addAttribute(btnLogar, 'disabled');
}
});

btnLogar.addEventListener('click', e => {
    e.preventDefault();

    if (!btnLogar.hasAttribute('disabled')) {
     
        getUser(URL, form);

        // console.log(localStorage.getItem('token'))

    } else {

    }
});

