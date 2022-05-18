/* Global Variables */
const apiKey = ",&appid=4881e1c6cd74d36e7f1d752d29963bec&units=metric";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";

// Create a new date instance dynamically with JS

let d = new Date();

let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

//adding event listner

document.getElementById("generate").addEventListener("click", perfomAction);

function perfomAction(e) {
  const zipCode = document.getElementById("zip").value; //the value that the user will enter

  const feeling = document.getElementById("feelings").value;

  fetch(baseUrl + zipCode + apiKey) /* building our URL */
    .then((data) => data.json()) // building it by promising chain
    .then((newData) =>
      postData("/add", {
        date: newDate,
        temp: newData.main.temp,
        feeling: feeling,
      })
    )
    .then(() => retrieveData());
}

// function to post data

const postData = async (url = "", newData = {}) => {
  console.log(newData);

  const res = await fetch(url, {
    method: "POST",

    credentials: "same-origin",

    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(newData),
  });
};

async () => {
  try {
    const newInfo = await res.json();

    console.log(newInfo);
  } catch (error) {
    console.log("error!", error);
  }
};

// to update data to the user and display the data to UI

const retrieveData = async () => {
  const req = await fetch("/getdata");

  try {
    const allData = await req.json();   

    console.log(allData);

    document.getElementById("date").innerHTML = allData.date;

    document.getElementById("temp").innerHTML = "the temp is " + Math.round(allData.temp)   ;

    document.getElementById("content").innerHTML = "i am " + allData.feeling;
  } catch (error) {
    console.log("Error!!!", error);
  }
};