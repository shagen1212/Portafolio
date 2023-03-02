export function valida(formcontato__input) {
    const tipoDeInput = formcontato__input.dataset.tipo
    
    if (formcontato__input.validity.valid) {
        formcontato__input.parentElement.classList.remove("input-message--invalid")
        formcontato__input.parentElement.querySelector('.input-message-error').innerHTML = ''
    } else{
        input.parentElement.classList.add("input-message--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, formcontato__input)
    }
}

const tiposErrores = [
    'valueMissing',
    'typeMismatch',
];

const mensajesError = {
    name: {
        valueMissing: 'Este campo no puede estar vacio'
    },
    email: {
        valueMissing: 'Este campo no puede estar vacio',
        typeMismatch: 'El correo no es valido'
    },
    subject: {
        valueMissing: 'Este campo no puede estar vacio',
    }
}

function mostrarMensajeDeError(tipoDeInput, formcontato__input) {
    let mensaje = ''
    tiposErrores.forEach((error) => {
        if(formcontato__input.validity[error]){
            mensaje = mensajesError[tipoDeInput][error];
        }
    });
    return mensaje
}