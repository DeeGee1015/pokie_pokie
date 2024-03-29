

requestAPI = () => {
  const Pokemon = prompt("Enter a pokemon name")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            pokemon = {
                name: data['name'],
                attack: data['stats'][4]['base_stat'],
                defense: data['stats'][3]['base_stat'],
                hp: data['stats'][5]['base_stat'],
                ability: data['abilities'][0]['ability']['name'],
                sprite: data['sprites']['front_default']

            }
            displayPokemon()
        }
    };
    xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${Pokemon.toLowerCase()}.json`, true);
    xhttp.send();

  }

let cont = document.createElement('div')
    let p = document.createElement('p')
    let p1 = document.createElement('p1')
    let p2 = document.createElement('p2')
    let p3 = document.createElement('p3')
    let p4 = document.createElement('p4')
    let img = document.createElement('img')
    displayPokemon = () => {

    p.innerText = pokemon['name']
    p1.innerText = 'Defense   ' + pokemon['defense']
    p2.innerText = 'Attack   ' + pokemon['attack']
    p3.innerText = 'Hp   ' + pokemon['hp']
    p4.innerText = 'Ability   ' + pokemon['ability']
    img.setAttribute('src', pokemon['sprite'])
    cont.appendChild(p)
    cont.appendChild(p1)
    cont.appendChild(p2)
    cont.appendChild(p3)
    cont.appendChild(p4)
    cont.appendChild(img)
    document.body.appendChild(cont)
}
