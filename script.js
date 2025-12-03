document.getElementById("Fbtn").addEventListener("click", FetchData);
document.getElementById("Sbtn").addEventListener("click", fetchShiny);
document.getElementById("Dbtn").addEventListener("click", fetchDream);

async function FetchData(){

    try{
        const PokeInput = document.getElementById("search").value.toLowerCase();
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${PokeInput}`);

        if(!response.ok){
            throw new Error("Could not find Pokémon");
        }

        const data = await response.json();
        console.log(data);

        const PokeName = document.getElementById("PokeName");
        const PokeImg = document.getElementById("PokeImg");
        const PokeId = document.getElementById("PokeId");
        const PokeH = document.getElementById("PokeH");
        const PokeW = document.getElementById("PokeW");


        PokeName.innerText = data.name.toUpperCase();
        PokeImg.src = data.sprites.front_default;
        PokeId.innerText = data.id;
        PokeH.innerText = data.height;
        PokeW.innerText = data.weight;

    }

    catch (error){
        console.log("Error");
    }


}

async function fetchShiny(){
    
    const PokeInput = document.getElementById("search").value.toLowerCase();
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${PokeInput}`);
    const data  = await response.json();

    const PokeImg = document.getElementById("PokeImg");
    PokeImg.src = data.sprites.front_shiny;

          const PokeName = document.getElementById("PokeName");
        
        const PokeId = document.getElementById("PokeId");
        const PokeH = document.getElementById("PokeH");
        const PokeW = document.getElementById("PokeW");


        PokeName.innerText = data.name.toUpperCase();
        PokeImg.src = data.sprites.front_default;
        PokeId.innerText = data.id;
        PokeH.innerText = data.height;
        PokeW.innerText = data.weight;

}

async function fetchDream(){
    const PokeInput = document.getElementById("search").value.toLowerCase();
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${PokeInput}`);
    const data  = await response.json();

    const PokeImg = document.getElementById("PokeImg");
    PokeImg.src = data.sprites.other.dream_world.front_default;

          const PokeName = document.getElementById("PokeName");
        
        const PokeId = document.getElementById("PokeId");
        const PokeH = document.getElementById("PokeH");
        const PokeW = document.getElementById("PokeW");


        PokeName.innerText = data.name.toUpperCase();
        PokeImg.src = data.sprites.front_default;
        PokeId.innerText = data.id;
        PokeH.innerText = data.height;
        PokeW.innerText = data.weight;

}
