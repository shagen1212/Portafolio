import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("formcontato__input")

inputs.forEach( formcontato__input => {
    formcontato__input.addEventListener('blur', (formcontato__input) => {
        valida(formcontato__input.target)
    })
})

const profile = document.getElementById('profile')
const height = profile.clientHeight
const width = profile.clientWidth

profile.addEventListener('mousemove', (event) => {
    const {layerX, layerY} = event

    const yRotation = (
        (layerX - width / 2) / width
    ) * 20
    const xRotation = (
        (layerY - height / 2) / height
    ) * 20

    const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`
    
    profile.style.transform = string
})

profile.addEventListener('mouseout', () =>{
    profile.style.transform = `
    perspectiva(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})