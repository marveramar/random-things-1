'use strict'

const list = document.querySelector('#list');
const btn = document.querySelector('#btn');
const errorMessage = document.querySelector('.error')
const elementForm = document.querySelector('.form')

//coger información de la API

const getInfo = () => {
    const input = document.querySelector('#input');
    const inputValue = input.value.toLowerCase()
    console.log(inputValue)
    fetch('https://swapi.co/api/people/?search=' + `${inputValue}`)
        .then(response => response.json())
        .then(data => {
            const dataPeople = data.results
            const dataCount = data.count
            console.log(dataCount)
            showInfo(dataPeople)
            console.log(data)
            error(dataCount)
        })
    //guardar en el Local el ultimo nombre buscado
    localStorage.setItem('name', inputValue)
}

// mostrar la información del personaje buscado

const showInfo = (people) => {
    for (let element of people) {
        const elementLi = document.createElement('li');
        const elementLi2 = document.createElement('li');
        const elementLi3 = document.createElement('li')
        const name = element.name
        const height = element.height
        const birth = element.birth_year
        const containLi = document.createTextNode('🌖' + `${name}`);
        const containLi2 = document.createTextNode('Altura: ' + `${height}` + 'mm')
        const containLi3 = document.createTextNode('Nacimiento: ' + `${birth}`)
        elementLi.appendChild(containLi);
        elementLi2.appendChild(containLi2);
        elementLi3.appendChild(containLi3)
        list.appendChild(elementLi);
        list.appendChild(elementLi2);
        list.appendChild(elementLi3)
    }
}
//mostrar en el reinicio de la página la última búsqueda
const getLocal = () => {
    if (localStorage !== null) {
        const LastVisit = localStorage.getItem('name');
        input.value = LastVisit;
    }
    else {
        console.log('local vacio');
    }
}

//mensaje de error si no hay ningún elemento que coincida

function error(a) {
    if (a == 0) {
        const errorP = document.createElement('p');
        const errorText = document.createTextNode('No hemos encontrado nadie con ese nombre en TOOODO el UNIVERSO 😱 Ingresa un nombre válido')
        errorP.appendChild(errorText)
        errorMessage.appendChild(errorP)
    }
    else {
        errorMessage.classList.add('hidden')
    }
}

//función para igualar el enter al click

function enterKeyHandler(event) {
    event.preventDefault();
    getInfo();
}
window.addEventListener('load', getLocal);
elementForm.addEventListener('submit', enterKeyHandler);
btn.addEventListener('click', getInfo);