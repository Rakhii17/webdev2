// async function fetchData(city) {
//     try {
//         const API_key = "ad85876333aeca487dfc9fe18b923f40";
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

//         const data = await response.json();
//         console.log(city);
//         console.log(data.main.temp);
//         console.log(data.main.humidity);
//     } catch (err) {
//         console.error(err);
//     }
// }
// fetchData("london")


// setting items in local storage
localStorage.setItem("username", "john");
sessionStorage.setItem("theme", "dark");
