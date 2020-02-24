const axios = require('axios');


const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
    headers: { "x-rapidapi-key": "59b583ec42msh470ac7d30a2c337p18bf27jsna7657e2e5870" }
});

const getLugarLatLon = async(direccion) => {
    const encodedUrl = encodeURI(direccion);
    const response = await instance.get(`?location=${encodedUrl}`);
    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = response.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        address,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}