//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const title = document.getElementById("title");
const day = document.getElementById("nasa_day");
const imgEl = document.querySelector("img");
const description = document.getElementById("description");

window.onload = fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasa_key}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    title.innerText = data.title;
    day.innerText = data.date;
    imgEl.src = data.url;
    description.innerText = data.explanation;
    //   document.querySelector(".display-section").style.display = "block";
    //   document.querySelector(".input-section").style.display = "none";
  })
  .catch((err) => console.log(err));

let start = "",
  end = "";
const btnEl = document.querySelector("button");
btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  start = document.querySelector("input").value;
  end = start;

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${nasa_key}&start_date=${start}&end_date=${end}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      title.innerText = data[0].title;
      day.innerText = data[0].date;
      imgEl.src = data[0].url;
      description.innerText = data[0].explanation;
      document.querySelector("input").value = "";
      //   document.querySelector(".display-section").style.display = "block";
      //   document.querySelector(".input-section").style.display = "none";
    })
    .catch((err) => console.log(err));
});

// console.log(nasa_day);
