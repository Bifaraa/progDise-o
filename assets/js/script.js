document.addEventListener('DOMContentLoaded', async () => {
    // form
    const container = document.querySelector(".container"),
        pwShowHide = document.querySelectorAll(".showHidePw"),
        pwFields = document.querySelectorAll(".password");

    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            pwFields.forEach(pwField => {
                if (pwField.type === "password") {
                    pwField.type = "text";

                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                } else {
                    pwField.type = "password";

                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })
        })
    })


    // acción ingresar  ala plaforma

    const botonIngresar = document.querySelector('.boton__ingresar');
    const instrucciones = document.querySelector('.instrucciones')
    const verMas = document.querySelector('.ver__mas');
    const containerInfomacion = document.querySelector('.informacion');
    // para pantallas touch
    botonIngresar.addEventListener('touchstart', () => {
        console.log('toque la pantalla');
        instrucciones.setAttribute('style', 'display:none;');
        verMas.setAttribute('style', 'display:block;');
        container.setAttribute('style', 'display:block;');
        botonIngresar.setAttribute('style', 'display:none;')
    })
    verMas.addEventListener('touchstart', () => {
        instrucciones.setAttribute('style', 'display:block;');
        verMas.setAttribute('style', 'display:none;');
        container.setAttribute('style', 'display:none;');
        botonIngresar.setAttribute('style', 'display:block;');
    })

    // Pc de mesa
    botonIngresar.addEventListener('click', () => {
        console.log('toque la pantalla');
        instrucciones.setAttribute('style', 'display:none;');
        verMas.setAttribute('style', 'display:block;');
        container.setAttribute('style', 'display:block;');
        botonIngresar.setAttribute('style', 'display:none;');
        containerInfomacion.setAttribute('style', 'width: 30%;');
    })
    verMas.addEventListener('click', () => {
        instrucciones.setAttribute('style', 'display:block;');
        verMas.setAttribute('style', 'display:none;');
        container.setAttribute('style', 'display:none;');
        botonIngresar.setAttribute('style', 'display:block;');
        containerInfomacion.setAttribute('style', 'width: 50%;');
    })

    // ingresar a la plataforma
    const btnIngresar = document.querySelector('.boton__login');
    btnIngresar.addEventListener('click', () => {
        const listInputs = document.querySelectorAll('[data-input-form]');
        if (verificarForm(listInputs)) {
            peticionLogin(listInputs[0].value, listInputs[1].value)
        }

    })

})

async function peticionLogin(name, pass) {
    const usuarios = await fetchData()
    console.log('voy a ingresar')
    let isLogin = false;
    usuarios.forEach(user => {
        if (user.username == name && user.password == pass) {
            window.open('assets/view/home.html')
            window.close()
        }
    })
    return false
}
async function fetchData() {
    const res = await fetch('assets/data/adm.json');
    return await res.json();
}
function verificarForm(listaInputs) {
    let correcto = true;
    listaInputs.forEach((input) => {
        if (input.value === '') {
            correcto = false;
            input.setAttribute('style', 'border: 2px solid red;');
        }
    })
    return correcto;
}

