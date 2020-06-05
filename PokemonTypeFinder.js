#!/usr/bin/env node


var fileLocation  = prompt("Please enter the file location of your Pokemon list");

var data = fs.readFileSync(fileLocation);
  
var PokemonList = data.toString().split("\n").map(pokemon => pokemon.toLowerCase());


for(pokemon in PokemonList){
  fetch('https://pokeapi.co/api/v2/pokemon/' + PokemonList[pokemon])
  .then(function(response) {
     return response.json()
   })
  .then(function(data){
    console.log(PokemonList[pokemon] + ": " + data.types[0].type.name)
  })
  .catch(function(){
	  console.log("Error could not find type")
  }
  
	
}


