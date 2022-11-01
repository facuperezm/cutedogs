let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("img").src = data.message;
    })
    .catch((err) => {
      console.log(err);
    });
});
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("img").src = data.message;
    console.log("se ejecuto por primera vez ");
  })
  .catch((err) => {
    console.log(err);
  });
