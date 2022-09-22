async function loadPokemonAPI(x) {
   let newvar;
   if (allPokemon[x - 1] == undefined) {
       if (x == 'urshifu') {
           x = 'urshifu-single-strike';
       }
       if (x == 'darmanitan') {
           x = 'darmanitan-standard';
       }
       let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${x}`;
       let pokemonResponse = await fetch(pokeUrl);
       currentPokemon = await pokemonResponse.json();
       newvar = currentPokemon;
   } else { currentPokemon = allPokemon[x - 1]; }
   return newvar;
}

async function loadPokemonSpeciesAPI(i) {
   if (i == 'urshifu-rapid-strike' || i == 'urshifu-single-strike') {
       i = 892;
   }
   if (i == 'darmanitan-standard') {
       i = 555;
   }
   let speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${i}`
   let speciesResponse = await fetch(speciesURL);
   currentSpecies = await speciesResponse.json();
}

async function loadPokemonTypeAPI(j, x) {
   let typeURL = `https://pokeapi.co/api/v2/type/${allPokemon[x-1].types[j].type.name}/`;
   let typeResponse = await fetch(typeURL);
   let germanType = await typeResponse.json();
   return germanType;
}

async function loadPokemonAbilityAPI(k, x) {
   let abilityUrl = `https://pokeapi.co/api/v2/ability/${allPokemon[x-1].abilities[k].ability.name}/`;
   let abilityResponse = await fetch(abilityUrl);
   let currentAbility = await abilityResponse.json();
   return currentAbility;
}

async function loadEvolutionAPI(x) {
   let evoUrl = allSpecies[x - 1].evolution_chain.url;
   let evoResponse = await fetch(evoUrl);
   currentEvo = await evoResponse.json();
}

async function loadItemAPI(link) {
   let itemUrl = link;
   let itemResponse = await fetch(itemUrl);
   let currentItem = await itemResponse.json();
   return currentItem;
}

async function loadMove(name) {
   let moveUrl = `https://pokeapi.co/api/v2/move/${name}/`
   let moveResponse = await fetch(moveUrl);
   let currentMove = await moveResponse.json();
   return currentMove;
}