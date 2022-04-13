//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const title = document.getElementById("title");
const day = document.getElementById("nasa_day");
const imgEl = document.querySelector("img");
const description = document.getElementById("description");

window.onload = fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasa_key}`)
  .then((res) => res.json())
  .then((data) => {
    title.innerText = data.title;
    day.innerText = data.date;
    imgEl.src = data.url;
    description.innerText = data.explanation;
  })
  .catch((err) => console.log(err));

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  const start = document.querySelector("input").value;

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasa_key}&date=${start}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      title.innerText = data.title;
      day.innerText = data.date;
      imgEl.src = data.url;
      description.innerText = data.explanation;
      document.querySelector("input").value = "";
    })
    .catch((err) => console.log(err));
});
