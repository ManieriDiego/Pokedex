
let urlBase = 'https://pokeapi.co/api/v2/pokemon/'
let urlBasesita = 'https://pokeapi.co/api/v2/pokemon-species/'


document.getElementById('botonBuscar').addEventListener('click', () => {
    const id = document.getElementById('pokemonBuscar').value
    if(id){
        fetchDataPokemon(id)
    }
})

document.getElementsByClassName('xd')[0].addEventListener("keypress",(event) => {
    const id = document.getElementById('pokemonBuscar').value
    if (event.key === "Enter") {
        fetchDataPokemon(id)
    }});


function fetchDataPokemon(id){
    fetch(`${urlBase}${id}`)
    .then(data => data.json())
    .then(data => mostrarDatosPokemon(data))
    .then(fetchMasInfo(id))
    

}



function fetchMasInfo(id){
fetch(`${urlBasesita}${id}`)
.then(data => data.json())
.then(data => masInfo(data))
}



function masInfo(data){
   

    


    const genera = data.genera[5].genus
    const categoriaHtml = document.getElementById('categoria')

    categoriaHtml.innerHTML=''
    const categoriaValor = document.createElement('p')
    categoriaValor.textContent = 'Categoria: '
     const categoria = document.createElement('p')
     categoria.textContent = genera
     
     categoriaValor.className+= ' blanco'

     categoriaHtml.appendChild(categoriaValor)
     categoriaHtml.appendChild(categoria)
    


}





function mostrarDatosPokemon(data){
   // const DataDelPokemon = document.getElementById('dataDelPokemon')
   console.log(data)
    const fotitoNombre = document.getElementById('fotito-nombre')
    const alturaHtml = document.getElementById('altura')
    const pesoHtml = document.getElementById('peso')
    const habilidadesHtml = document.getElementById('habilidades')
    const tipoHtml = document.getElementById('tipo')
    const debilidadHtml = document.getElementById('debilidad')
    fotitoNombre.innerHTML=''
    alturaHtml.innerHTML=''
    pesoHtml.innerHTML=''
    habilidadesHtml.innerHTML=''
    tipoHtml.innerHTML=''
    debilidadHtml.innerHTML=''

    //crear fetch adentro del otro

   

    const pokemonNombre = data.name
    const altura = data.height
    const peso = data.weight
    const habilidad = data.abilities[0].ability.name
    const id = data.id
   // const subTipo = data.types[1].type.name
    const imagenPokemon = data.sprites.other.dream_world.front_default

   // const debilidad = 

    const nombrePoke = document.createElement('h2')
    nombrePoke.textContent = pokemonNombre.charAt(0).toUpperCase()+pokemonNombre.slice(1)

    const alturaValor = document.createElement('p')
    alturaValor.textContent = 'Altura: '
   const alturaInfo = document.createElement('p')
   alturaInfo.textContent = `${altura}cm`
    const pesoValor = document.createElement('p')
    pesoValor.textContent = 'Peso: '
   const pesoInfo = document.createElement('p')
   pesoInfo.textContent = `${peso}kg`
    const habilidadValor = document.createElement('p')
    habilidadValor.textContent = 'Habilidad: '
   const habilidadInfo = document.createElement('p')
    habilidadInfo.textContent = `${habilidad}`

    alturaValor.className+= ' blanco'
    pesoValor.className+= ' blanco'
    habilidadValor.className+= ' blanco'

    const imagenPokemonInfo = document.createElement('img')
    imagenPokemonInfo.src = imagenPokemon




    const todosLosTiposDelPokemon = data.types
    const tipoIgual = document.createElement('p')
    tipoIgual.className+= ' blanco'
    tipoIgual.textContent = 'Tipo: '
    tipoHtml.appendChild(tipoIgual)
    
     for (let index = 0; index < todosLosTiposDelPokemon.length; index++) {
         const tipo = todosLosTiposDelPokemon[index].type.name;
         const tipoInfo = document.createElement('p');
         tipoInfo.textContent = tipo
         tipoHtml.appendChild(tipoInfo);
     }
    
   
    
    
    alturaHtml.appendChild(alturaValor)
    alturaHtml.appendChild(alturaInfo)
    pesoHtml.appendChild(pesoValor)
    pesoHtml.appendChild(pesoInfo)
    habilidadesHtml.appendChild(habilidadValor)
    habilidadesHtml.appendChild(habilidadInfo)
   // DataDelPokemon.appendChild(tipo)
    fotitoNombre.appendChild(nombrePoke)
    fotitoNombre.appendChild(imagenPokemonInfo)



    
}

//'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'


