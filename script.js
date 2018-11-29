ALL_POKEMON = [];
class Pokemon {
  constructor(number, species, weight, height, type, hp, atk, def, spatk, spdef, speed, abilities) {
    this.number = number;
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.type = type;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spatk = spatk;
    this.spdef = spdef;
    this.speed = speed;
    this.abilities = abilities;
  }
}

// function pokedexEntry() {
//   let entry = `No. ${this['number']}<br>${(this['species'])}<br>HT: ${Number(.1*this['height']).toFixed(1)}m<br>WT: ${Number(this['weight']*0.1).toFixed(1)}kg<br><br>HP: ${this['hp']} SPD: ${this['speed']}<br>ATK: ${this['atk']} Sp.ATK: ${this['spatk']}<br>DEF: ${this['def']} Sp.DEF: ${this['spdef']}`;
//
//   var target = document.getElementById('screen-body');
//   target.innerHTML = entry;
// }

function getInfo (id) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + id + "/", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      var pokemon = new Pokemon(data['id'], data['name'], data['weight'], data['height'], data['types'], data['stats'][5]['base_stat'], data['stats'][4]['base_stat'], data['stats'][3]['base_stat'], data['stats'][2]['base_stat'], data['stats'][1]['base_stat'], data['stats'][0]['base_stat'], data['abilities']);
      console.log(data);
      ALL_POKEMON.push(pokemon)



      };
   }
}



function getPokemon(id){
  var xhttp = new XMLHttpRequest();
  var id = prompt("Enter a Pokemon name or ID");
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText)
      console.log(data);
       // let pokemon = new Pokemon(data['name'],data.stats[5].base_stat,data.stats[4].base_stat,data.stats[3].base_stat,data.abilities[0].ability.name, data.abilities[1].ability.name);
       // ALL_POKEMON.push(pokemon);
       let node = document.createElement('p');
       node.innerHTML = ' Name: '+ data['name'] + '<br>' + '  Weight: ' + data['weight'] + '' + ' Height: ' + data['height'] + '<br>' + ' HP: ' + data['stats'][5]['base_stat'] + ' ATK: ' + data['stats'][4]['base_stat'] + ' DEF: ' + data['stats'][3]['base_stat'] ;
       document.getElementById('screen-body').appendChild(node);
       // var id = prompt('Enter a Pokemon Name or ID');
       var img = document.createElement("img");
       img.src = 'http://www.pokestadium.com/sprites/emerald/animated/'+id+'.gif';

       // var src = document.createElement('p');
       // src.innerHTML = img-src;
       document.getElementById('screen-body').appendChild(img);
      }
  };
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + id + "/", true);
  xhttp.send();


}


function clearScreen() {
  window.location.reload();
}
