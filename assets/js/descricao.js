'use strict'

const animalId = localStorage.getItem('animalId')
const apiKey = '7v60PXGO'

const pegarAnimal = () => {

    const apiEndpoint = `https://api.rescuegroups.org/v5/public/animals/${animalId}`
    
    fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        Authorization: apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => criarDescricao(data))
      .catch((err) => console.error(err))

}

const criarDescricao = (animal) => {

    const image = document.getElementById('img')
    image.style.backgroundImage = `url(${animal.data[0].attributes.pictureThumbnailUrl.replace('width=100', '')})`

    const nome = document.getElementById('nome')
    nome.textContent = animal.data[0].attributes.name
    
    const localizacao = document.getElementById('location')
    localizacao.textContent = animal.included[5].attributes.street

    const raca = document.getElementById('breed')
    raca.textContent = animal.included[0].attributes.name

    const cor = document.getElementById('color')
    cor.textContent = animal.included[1].attributes.name

    const especie = document.getElementById('species')
    especie.textContent = animal.included[3].attributes.singular

}

pegarAnimal()