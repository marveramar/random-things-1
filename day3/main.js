'use strict'

const inputs = document.querySelectorAll('.controls input');
const handleUpdate = (e) => {
    const suffix = e.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix)
}
inputs.forEach(input => input.addEventListener('change', handleUpdate))
// en js lo que hay que hacer es seleccionar los inputs y recoger el name y el valor para pasarle a este el estilo.
//el suffix es solo la unidad de medida(px)
//y luego en style.setProperty es donde le damos el name' y el value' que se recogen directamente del evento. setProperty es un método que le da
//los valores a un elemento declarado, este métedo necesita dos atributos, el name y el value, el name representa la propiedad css que se va a modificar.