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



 async function getPlanetInfo () {
  const res = await axios.get(`https://swapi.dev/api/planets/?page=${p}`)
  res.data.results.forEach(item  => {
    console.log(`aaaa`, item)
      axios.get(item) 
      .then(function (response) {      
      const planetName = document.createElement("div")
      planetName.innerHTML = `${response.data.name}`
      
      wrapperContent.append(planetName)
        })
  });
   }
