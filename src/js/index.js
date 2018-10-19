const form = document.querySelector('form');
const btnLogar = document.querySelector('#logar');
const URL = 'url/da/api';

validaLogin(form);

btnLogar.addEventListener('click', e => {
    e.preventDefault();

    if (!btnLogar.classList.contains('disabled')) {

        const login = {
            email: form.email.value,
            senha: form.password.value,
        };

        if(login.email === 'teste@teste.com' && login.senha === 'teste@teste') {
            window.location = "https://www.youtube.com";
        }else {
            alert('Email ou senha Inválidos');
        }

        // const header = {
        //     method: "POST",
        //     body: login
        // };

        // fetch(URL, header)
        //     .then(response => response.json()) // Espero que venha um hash como token
        //     .then(data => {
        //         if (data.erro) {
        //             alert('Usuario ou Senha Inválidos')
        //         } else {
        //             localStorage.setItem('token', data.token);
        //         }
        //     })
        //     .catch()

        // // console.log(localStorage.getItem('token'))

    } else {

    }
});
