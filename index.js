function getweather() {
    let city = document.getElementById("city");
    showweather(city.value);
}

async function showweather(city) {
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f570cb2952msh53639550a3441acp177a73jsn58461091888f',
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); 
        getdata(result);
    } catch (error) {
        console.error(error);
    }
}

function getdata(result) {
    let item = document.getElementById('main');

    item.innerHTML =
        `<p>City: ${result.name}</p>
         <p>Temperature: ${result.main.temp} °C</p>`;
}
