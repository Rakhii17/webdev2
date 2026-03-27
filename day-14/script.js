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
const API_Key = "ad85876333aeca487dfc9fe18b923f40";
const response = await fetch('https://api. openweathermap. org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric');
const data = await response. json();
console. log(city);
console.log(data.main.temp);
}catch (err) {
console.error(err);
}
}
getData("london")