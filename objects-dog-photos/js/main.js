const imgEl = document.querySelector("img");
//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    imgEl.src = data.message;
  })
  .catch((error) => console.log(error));
