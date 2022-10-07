setInterval(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("img").src = data.message;
    })
    .catch((err) => {
      console.log(err);
    });
}, 2000);
