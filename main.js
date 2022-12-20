const btn = document.querySelector("button");
const img = document.querySelector("img");

function getRandomDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      img.src = data.message;
    })
    .catch((err) => {
      console.error(err);
    });
}

btn.addEventListener("click", getRandomDogImage);

getRandomDogImage();
