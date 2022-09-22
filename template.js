function templatePokemonInfo(i) {
   return `
   <div id="pokemon${currentPokemon.id}" onclick="initDetails(${currentPokemon.id})" class="card">
       <img src="${currentPokemon.sprites.other['official-artwork'].front_default}" class="card-img">
       <div class="card-body">
           <span>#${normalizeID(currentPokemon.id)}</span>
           <p class="card-text"><b>${allPokemonNames[currentPokemon.id - 1]}</b></p>
       </div>
       <div class="poke-types card-body" id="types${i}"></div>
   </div>
   `;
}

function templatePokemonType(i, j, germanType, idPrecursor) {
   return `
   <div id="${idPrecursor}${i}${j}" class="pokemon-type">
   ${(germanType)}
   </div>
   `;
}

function templateEvolution1Info(info1, germanName) {
   return `
   <div class="d-flex flex-column align-items-center justify-content-center certain-width">
       <img src="${info1.sprites.other['official-artwork'].front_default}" class="card-small-img-top" onclick="initDetails(${info1.id})">
       <h4>${germanName} <span class="gray"> Nr. #${normalizeID(info1.id)}</span></h4>
   </div>`;
}

function templateEvolution2Info(x, y, info1) {
   return `
   <div id="evo${info1}" class="d-flex align-items-center justify-content-center justForMedia">
       <div class="d-flex flex-column align-items-center justify-content-center justForMediaChild">
           ${x}
           <h6>${y}</h6>
           <img src="img/arrow-18-64.png" class="evoarrow">
       </div>
   </div>
   `
}

function certainLocation(element) {
   return element[16][1].name == 'take-damage';
}

function criticalHits(element) {
   return element[16][1].name == 'three-critical-hits';
}

function towerOfDarkness(element) {
   return element[16][1].name == 'tower-of-darkness';
}

function towerOfWaters(element) {
   return element[16][1].name == 'tower-of-waters';
}

function spin(element) {
   return element[16][1].name == 'spin';
}

function shed(element) {
   return element[16][1].name == 'shed';
}

function trade(element) {
   return element[16][1].name == 'trade';
}

function itemTrigger(element) {
   return element[2][1] && element[16][1].name == 'use-item';
}

function certainFriendship(element) {
   return element[8][1] && element[16][1].name == 'level-up';
}

function simpleLvlUp(element) {
   return element[9][1] && element[16][1].name == 'level-up';
}

function knownMove(element) {
   return element[16][1].name == 'level-up' && element[3][1] != null;
}

function itemIsHold(element) {
   return element[16][1].name == 'level-up' && element[1][1] != null;
}

function partyMember(element) {
   return element[16][1].name == 'level-up' && element[11][1] != null;
}

function isDayOrNight(newarr) {
   if (newarr[14][1] == 'day') {
       param2 = 'am Tag';
   } else if (newarr[14][1] == 'night') {
       param2 = 'in der Nacht';
   } else {
       param2 = '';
   }
   return param2;
}

async function heldItem(newarr) {
   param1 = '';
   if (newarr[1][1]) {
       currentItem = await loadItemAPI(newarr[1][1].url);
       param1 = `<img src=${currentItem.sprites.default}>`;
   }
   return param1;
}