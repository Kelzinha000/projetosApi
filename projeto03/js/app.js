// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

const page = 2
const baseUrl = 'https://rickandmortyapi.com/api'

const loadCharacter = async () => {
    const res = await fetch(`${baseUrl}/character?page=${page}`);
    const data = await res.json();
    const limitData =  data.results.slice(3,9);
    return {results:limitData};
} ; // async tranformr essa função que nessecita de resposta
 const loadLocation = async () => {
    const res = await fetch( `${baseUrl}/location`);
    const data = await res.json();
    const limitData =  data.results.slice(0,10);
    return {results: limitData};
};
 
 const loadEpisode = async () => {
    const res = await fetch (`${baseUrl}/episode`)
    return await res.json();
}
   
 // para citar todas as intruções, vai rodar e executar todas as promessas
const loadAllWhitPromiseAll = async () => {
    const [character, location, episode] = await Promise.all([
        loadCharacter(), 
        loadLocation(),
        loadEpisode()
    ])
   
    showChacaracter(character.results)
    showLocation(location,location)
    // console.log(episode,episode)
};
 showChacaracter(character.results);

loadAllWhitPromiseAll();

function showChacaracter(characters){
    const characterContainer = document.getElementById("character-container");
    characters.map((character) => {
        divCharacter.id = document.createElement("div");
        const divCharacter.id = `character-${character}`
        divCharacter.innerhHTml = ` 
        <img src = '${character.image}" alt="Imagem do personagem" />
        <article class="character-info">
        <h3> ${character.name}</h3>
        <span class="${character.status} ">${character.status} - ${character.species}</span>

        <span class="location"> Location:</span>
        <a href="${character.location.url}">${character.location.name} </a>

        <span class="origin"> Origin:</span>
        <a class="character-link" href="${character.origin.url}">${character.location.name} </a>
        </article>
        `;
        divCharacter.classList.add('character-box');
        characterContainer.appendChild(divCharacter);
        divCharacter.addEventlistener('click',async() => {
           characterDetails(character.id)
        })
    })
  
}
function characterDetails(id){
         const idCryped = encryptId(id) // criu uma varial e atribuiu uma função
           window.location.href = `./pages/character.html?id=${idCryped}`
}

function encryptId (id) {
    return id.toString(36)
}
async function showLocation(){
    const locationContainer = document.getElementById('location-ontainer')
    locations.map((location)=>{
        const divLocation = document.createElement('div')
        divLocation.innerHTML = `
        <p class="title">${location.name}</p>
        <p class="type">${location.type}</p>
        <p class="dimesion">${location.dimenson}</p>
        <p class="residents">${location.residents}</p>
        `;
        divLocation.classList.add('location-box')
        locationContainer.appendChild(divLocation)
    })
    console.log(location)
}