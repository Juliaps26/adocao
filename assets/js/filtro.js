'use strict'

// Pegando o Elemento HTML com o ID 'botao-filtro'
const botaoFiltro = document.getElementById('botao-filtro')

// Quando o botão foi clicado, ele exucutará um função
botaoFiltro.addEventListener('click', () => {

    // Pegando o elemento HTML com o ID 'lista'
    const lista = document.getElementById('lista')

    // Ao clicar ele tira e retira a classe 'aparecer'
    lista.classList.toggle('aparecer')

})


/*  
*    Outra maneira de executar a função S2
*
*    const aparecer = () => {
*        const lista = document.getElementById('lista')
*        lista.classList.toggle('aparecer')
*    }
*    botaoFiltro.addEventListener('click', aparecer())
*/