'use strict'

const pegarImagens = () => {

    const apiKey = '7v60PXGO'
    const apiEndpoint = `https://api.rescuegroups.org/v5/public/animals/search/available?limit=124`
    
    fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        Authorization: apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => criarAnimais(data.data))
      .catch((err) => console.error(err))

}

const criarAnimais = (animal) => {

    const galeria = document.getElementById('galeria')
    console.log(animal)

    animal.map((animalInfo) =>{

        const image = document.createElement('div')
        image.classList.add('img')
        image.style.backgroundImage = `url(${animalInfo.attributes.pictureThumbnailUrl.replace('width=100', '')})`
        
        const link = document.createElement('a')
        link.href = './descricao.html'
        link.addEventListener('click', () => {

            localStorage.setItem('animalId', animalInfo.id);
            
        })

        image.appendChild(link)
        galeria.appendChild(image)

    })

}

pegarImagens()