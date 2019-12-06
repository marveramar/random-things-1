'use strict'
console.log('holaa')
const list = document.querySelector('#list');
const divHistory = document.querySelector('.history')
const btnMoveFav = document.querySelector('.move')
const btn = document.querySelector('#btn');
const elementForm = document.querySelector('.form');
let allPokemonsCached = [];

const getInfo = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const pokemon = data.results
            const saveIntoLocal = (info) => {
                localStorage.setItem("allPokemons", JSON.stringify(info));
                allPokemonsCached = JSON.parse(localStorage.getItem("allPokemons"))
            }
            saveIntoLocal(pokemon)
            showInfo(allPokemonsCached)
        })
}

const showInfo = (pokemonData) => {
    for (let index of pokemonData) {
        const name = index.name;
        const elementLi = document.createElement('li');
        const elementSpan = document.createElement('span');
        const content = document.createTextNode(`${name}`);
        const elementImg = document.createElement('img');
        elementImg.src = `http://www.pokestadium.com/sprites/xy/${name}.gif`;
        elementSpan.appendChild(content);
        elementLi.appendChild(elementSpan)
        elementLi.appendChild(elementImg)
        list.appendChild(elementLi);

    }

}


const searchingPokemon = () => {
    const input = document.querySelector('#input');
    const inputValue = input.value.toLowerCase();
    const allPokemon = document.querySelectorAll('span');
    for (let element of allPokemon) {
        if (element.innerHTML.indexOf(inputValue) !== -1) {
            element.closest('li').classList.remove('hidden')
        }
        else {
            element.closest('li').classList.add('hidden');
        }
    }

    const saveFavourites = (event) => {
        let favourite = localStorage.setItem(inputValue, JSON.stringify(inputValue))
        let favPokes = []
        favPokes = favourite


    }



    btnMoveFav.addEventListener('click', saveFavourites)
}



btn.addEventListener('click', searchingPokemon)
window.addEventListener('load', getInfo)
