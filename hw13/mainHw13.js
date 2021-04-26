const getInfo = document.querySelector('.get_info');
const getPlanet = document.querySelector('.get_planet');
const wrapperContent = document.querySelector('.wrapper')

getInfo.addEventListener('click', getInformation);

async function getInformation () {
const res = await axios.get('https://swapi.dev/api/films/2/')
res.data.characters.forEach(item  => {
  axios.get(item)
    .then(function (response) {
    const character = document.createElement("div")
    character.innerHTML = `${response.data.name} <br>
    ${response.data.birth_year}<br>
    ${response.data.gender}`
    
    wrapperContent.append(character)
      })
      while(wrapperContent.firstChild) {
        wrapperContent.removeChild(wrapperContent.firstChild);}
});
}

getPlanet.addEventListener('click', getPlanetInfo);


let p = 1
function getPlanetInfo(page){
    while(wrapperContent.firstChild) {
        wrapperContent.removeChild(wrapperContent.firstChild);
    };
    axios.get(`https://swapi.dev/api/planets/?page=${p}`)
    .then((res) => {
        for (let i = 0; i < res.data.results.length; i++) {
            const planet = document.createElement('div');
            planet.innerHTML = res.data.results[i].name
            wrapperContent.appendChild(planet); 
        }
        const previous = document.createElement('button');
        previous.className = 'button'
        previous.innerText = 'previous'
        const next = document.createElement('button');
        next.className = 'button'
        next.innerText = 'next'
        next.setAttribute('value', 'next');
        previous.setAttribute('value', 'previous');
        wrapperContent.appendChild(previous);
        wrapperContent.appendChild(next);
        next.addEventListener('click', function(){
            p++;
            if(p===7){
                p=6
            }
            getPlanetInfo(p); 
        });
        previous.addEventListener('click', function(){
            p--;
            if(p===0){
                p=1
            }
            getPlanetInfo(p);
        });
    })
}
