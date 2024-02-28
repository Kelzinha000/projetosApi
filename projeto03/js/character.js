const urlParams= new URLSearchParams(window.location.search)
const idParams = urlParams.get('id')
console.log(descrypt(idParams))

function descyptId(id){
return parseInt(id, 36);
}
async function loadCharacter(baseUrl, id){
    try{
 const response = await fetch(`${baseUrl}/${id}`)
 if(!response.ok){
    throw new Error('Erro ao carregar o personagem')
 } 
 return await response.json();
    } catch(error){
        console.error(error);
        throw error;
    }
    async function load(){
        const urlParams = new URLSearchParams(window.location.search)
        const idParam = urlParams.get('id')
        if(!idParam){
            console.error('ID não encontrado na URL')
            return
        }
    }
}
const idDescrypt = descyptId(idParam)
const urlBase = `https://rickandmortyapi.com/api/character/59`
 try{
    const character = await loadCharacter(urlBase, idDescrypt)
    console.log('Character', character)
 }catch(error){
    console.log('Erro ao carrear o personagem')
 }

load()

  