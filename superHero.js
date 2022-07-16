
const newHeroBtn = document.getElementById("newHeroBtn")
const heroImgDiv = document.getElementById("heroImg")

const searchBarN = document.getElementById("searchBarN")
const serachbtnN = document.getElementById("searchBtnN")

const searchBarId = document.getElementById("searchBarId")
const searchBtnId = document.getElementById("searchBtnId")

searchBtnN.onclick = ()=>{
  searchSuperHerobyName(searchBarN.value)
 }

searchBtnId.onclick = ()=>{
  searchSuperHeroById(searchBarId.value)
}

newHeroBtn.onclick = ()=>{
 getRandomSuperHero(random())
}

const random = ()=>{
 return ((Math.floor(Math.random()*(731)+1)))
}

const statToEmoji = {
  intelligence:"🧠",
  strength:"🦾" ,
  speed :"🏃‍♂️",
  durability : "🏋️‍♂️",
  power :"📊",
  combat: "⚔️"
}
const showHeroStat= (char)=>{
  const name = `<h2> ${char.name} </h2>`

  const img = `<img src  = ${char.image.url} height=200 width = 200/>`

  const stats = Object.keys(char.powerstats).map(stat=>{
  return  `<p>${statToEmoji[stat]}${stat.toUpperCase()}:${char.powerstats[stat]}</p>`
  }).join("")

  heroImg.innerHTML = `${name}${img}${stats}`

}

const getRandomSuperHero = (id) => {
fetch(`https://superheroapi.com/api.php/10223569763528853/${id}`)
.then(response=>response.json())
.then(json=>{
  const randomId = json
  showHeroStat(randomId)
})
}

const searchSuperHerobyName = (hName ) => {
  fetch(`https://superheroapi.com/api.php/10223569763528853/search/${hName}`)
  .then(response=>response.json())
  .then(json=>{
    console.log(json)
    const superHeroName = json.results[0]
    showHeroStat(superHeroName)
  })
  }

const searchSuperHeroById = (id) => {
  fetch(`https://superheroapi.com/api.php/10223569763528853/${id}`)
  .then(response=>response.json())
  .then(json=>{
    const superHeroId = json
    showHeroStat(superHeroId)
  })
  }

