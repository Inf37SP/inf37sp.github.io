
const buttonSwitch =  document.getElementById('button-colortheme');

    buttonSwitch.addEventListener( 'click', () => {

        document.body.classList.toggle('blackmode');

        if (document.body.classList.contains('blackmode')) {
        buttonSwitch.textContent = 'Modo Claro';
    } else {
        buttonSwitch.textContent = 'Modo Oscuro';
    }

    });