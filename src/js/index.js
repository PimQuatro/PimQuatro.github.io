const form = document.querySelector('form');
const btnLogar = document.querySelector('#logar');
const URL = '';

validaCampos(form);

document.addEventListener('keypress', function(e){
    if(e.which == 13){
       
    if (!btnLogar.hasAttribute('disabled')) {
     
        getUser(URL, form);

        // console.log(localStorage.getItem('token'))

    } else {

    }
    }
 }, false);


btnLogar.addEventListener('click', e => {
    e.preventDefault();

    if (!btnLogar.hasAttribute('disabled')) {
     
        getUser(URL, form);

        // console.log(localStorage.getItem('token'))

    } else {

    }
});

