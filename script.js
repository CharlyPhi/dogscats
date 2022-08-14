const dogUrl = "https://dog.ceo/api/breed/";
const catUrl = "https://api.thecatapi.com/v1/images/search?breed_ids="
const dogs = "";
const cats = "";
let audio1 = new Audio("sounds/mixkit-armhole-farting-3051.wav");
let audio2 = new Audio("sounds/VOXScrm_Wilhelm scream (ID 0477)_BSB.wav");
// Doggo Fetcher

const fetchDogos = async () => {
  let input = document.getElementById("dog");
  const urlToFetch = dogUrl + input.value + "/images";
  const response = await fetch(urlToFetch);
  if (response.ok) {
    const jsonResponse = await response.json();
    const dogs = jsonResponse.message;
    const random = Math.floor(Math.random() * dogs.length);
    document.getElementById("chien").src = dogs[random];
    return dogs;
  }
};

// Catto Fetcher

const fetchCatos = async () => {
  let input = document.getElementById("cat");
  const urlToFetch = catUrl + input.value;
  const response = await fetch(urlToFetch);
  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    const cats = jsonResponse
    const random = Math.floor(Math.random() * cats.length);
    document.getElementById("chat").src = cats[random].url;
    return cats;
  }
};

// Classy functions
const FartyBoy = function(){
audio1.play();
};

const Whilelm = function(){
  audio2.play();
  };
