document.addEventListener('DOMContentLoaded', ()=>{
    const urlParam = new URLSearchParams(window.location.search)
   // console.log(urlParam.get('index'))
    const paramIndex = urlParam.get('index')
    // console.log(paramIndex)
    
    const url = `https://swapi.dev/api/people/${parseInt(paramIndex)+2}/`

    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error ('Erro de rede: codigo'+response.status)
        }
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>console.log(err))
    
})

function personagem(item){
    const personageImg = document.querySelector('.peronagens.img')
    const nome = document.querySelector('.nome')
    const altura = document.querySelector('.altura')
    const peso = document.querySelector('.peso')
    const genero = document.querySelector('.genero')
    const cor_cabelo = document.querySelector('.cor_cabelo')
    const cor_olho = document.querySelector('.cor_olho')
    const cor_pele = document.querySelector('.cor_pele')
    const data_nascimento = document.querySelector('.data_nascimento')

  personageImg.innerHTML /* src */ = `../image/perso${paramIndex}.png`
  nome.innerHTML = `Nome : ${item.name}`
  altura.innerHTML = `Altura : ${item.heigth} cm`
  peso.innerHTML =  `Peso : ${item.mass} kg`
  genero.innerHTML =  `genero : ${item.gender}`
  cor_cabelo.innerHTML = `cor do cabelo : ${item.hair_color}`
  cor_olho.innerHTML = `cor do olho : ${item.eye._color}`
 data_nascimento.innerHTML = `data de nascimento: ${item.birth.year}`
}