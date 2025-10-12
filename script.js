const clearButton = document.getElementById("clearBtn");
const fetchBtn = document.getElementById("fetchBtn");


fetchBtn.addEventListener("click", () => btnHandler(1));
shinyBtn.addEventListener("click", () => btnHandler(2));
clearButton.addEventListener("click", () => btnHandler(3));


async function fetchData(){

    try {
        const pokemonName = document.getElementById("pokeName").value.toLowerCase();
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const shinyBtn = document.getElementById("shinyBtn");
        

    if(!response.ok){
        throw new Error("Could not find pokemon");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const nameOfPoke = data.name;
    const idOfPoke = data.id;

    const id = document.getElementById("idOfPoke");
    const name = document.getElementById("nameOfPoke");
    const imgElement = document.getElementById("pokemonSprite");

    console.log(data);

    imgElement.src = pokemonSprite;
    name.innerText = nameOfPoke;
    id.innerText = idOfPoke;

    imgElement.style.display="block";
    shinyBtn.style.display="block"
    name.style.display="block";
    id.style.display="block";

    }

    catch (error){
        console.log(error);
        alert("Colud not find Pokemon");
    }
}

async function fetchShiny(){
    const pokemonName = document.getElementById("pokeName").value.toLowerCase();
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();

    const imgElement = document.getElementById("pokemonSprite");
    const shinySprite = data.sprites.front_shiny;

    imgElement.src = shinySprite;
}

function clearInput(){
    const pokemonName = document.getElementById("pokeName");
    const imgElement = document.getElementById("pokemonSprite");
    const id = document.getElementById("idOfPoke");
    const name = document.getElementById("nameOfPoke");

    imgElement.style.display="none";
    shinyBtn.style.display="none"
    name.style.display="none";
    id.style.display="none";


    pokemonName.value="";
    pokemonName.focus();

    
}

function btnHandler(btnNumber){

    if(btnNumber === 1){
        fetchData();
    } else if(btnNumber === 2){
        fetchShiny();
    }else if(btnNumber === 3){
        clearInput();
    }

}


