const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const selectElement = document.getElementById('select');
const img = document.getElementById("logoImg");
const element = "logo1.png";

let getJoke = () => {
  img.src = element; 
  const url = `https://v2.jokeapi.dev/joke/${filterJoke}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
  jokeContainer.classList.remove("fade");

  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      console.log(item);
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};

var filterJoke = "Any";

selectElement.addEventListener('change', (event) => {
    filterJoke = event.target.value;
    img.src = element;
    btn.textContent = filterJoke === "Any" ? "Get Random Joke" : `Get ${filterJoke} Joke`;
});

btn.addEventListener("click", getJoke);
 
