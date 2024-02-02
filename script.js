const url = "https://kea-alt-del.dk/t7/superheroes/";

fetch(url)
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(data) {
  //We have the data
  console.log(data);
  data.forEach(listSuperHeroes);
}

function listSuperHeroes(oneSuperHero) {
  console.log("listSuperHeroes");
  const superhero = document.querySelector("template").content;
  const myClone = superhero.cloneNode(true);

  myClone.querySelector("h2").textContent = oneSuperHero.superName;
  myClone.querySelector("img").src = oneSuperHero.img;

  const parentElement = document.querySelector("main");
  parentElement.appendChild(myClone);
}
