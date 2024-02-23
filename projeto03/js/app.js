// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

const page = 2
const baseUrl = '"https://rickandmortyapi.com/api'

const loadCharacter = async () => {
    const res = await fetch(`${baseUrl}/character?page=${page}&_limit=5`)
     const data = await res.json();
     const limitData =  data.results.slice(0,6)
    return {results: limitData}
} ; // async tranformr essa função que nessecita de resposta
 const loadLocation = async () => {
    const res = await fetch ( `${baseUrl}/location`)
    return await res.json()
};
 
 const loadEpisode = async () => {
    const res = await fetch (`${baseUrl}/episode`)
    return await res.json()
};
 // para citar todas as intruções, vai rodar e executar todas as promessas
const loadAllWhitPromiseAll = async () => {
    const [character, location, episode] = await Promise.all([
        loadCharacter(), 
        loadLocation(),
        loadEpisode()
    ])
   
    console.log(character.results)
    console.log("location",location)
    console.log("episode",episode)
};

loadAllWhitPromiseAll()

function showChacaracter(characters){
    const characterContainer = document.getElementById("character-container");
    characters.map((character) => {
        const divCharacter = document.creatElemnet('div')
        divCharacter.innerhHTml = ` 
        <img src = '${character.image}" alt="Imagem do personagem"
        <article class="character-info">
        <h3> ${character.name}</h3>
        <span>${character.status} - ${character.species}</span>

        <span class="location"> Location:</span>
        <a href="${character.location.url}">${character.location.name} </a>

        <span class="origin"> Origin:</span>
        <a href="${character.origin.url}">${character.origin.name} </a>
        </article>
        `;
        divCharacter.classList.add('character-box')
        characterContainer.appendChild(divCharacter)
    })
  
}