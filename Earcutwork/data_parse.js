var Galar_Pokemon = document.getElementById("Galar").value;
let Galar_Parsed = [];
Galar_Pokemon.split(';').forEach(pokemon => {
    Galar_Parsed.push(pokemon);
});

var Pokedex_Data = document.getElementById("Dex").value;
var Pokedex_Parsed = [];
var Pokedex_Names_Parsed = [];
Pokedex_Data.split(";").slice(1).forEach(pokemon => {
    var pokeData = pokemon.split(",");
    let pokeName = pokeData[3];
    if(Galar_Parsed.includes(pokeName) && !Pokedex_Names_Parsed.includes(pokeName)){
        // console.log(pokeName);
        Pokedex_Names_Parsed.push(pokeName);
        Pokedex_Parsed.push(pokemon);
    }
});

Galar_Parsed.forEach(pokemon => {
    if(!Pokedex_Names_Parsed.includes(pokemon)){
        console.log(pokemon);
    }
})

document.getElementById("result").innerHTML = Pokedex_Parsed.join(";");