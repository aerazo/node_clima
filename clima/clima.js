const axios = require('axios');

const getClima = async(lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e5080bf05043fcc029106a5d69f896f3`)
    return response.data.main.temp;
}

module.exports = {
    getClima
}