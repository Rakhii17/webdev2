fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json));

//.then method is repeatdely used here so we wont use it 


// async function getData() {
//   try{
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   console.log(data);
// }

//   catch (err) {
//   console.log(err);
// }
// }
// getData()


// #api fetching data from server and display it on webpage


async function getData(city) {
try{
const API_Key = "af9f63c59a649f27d602b96a43d0bd14";
const response = await fetch('https://api. openweathermap. org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric');
const data = await response. json();
console. log(city);
console.log(data.main.temp);
}catch (err) {
console.error(err);
}
}
getData("london")