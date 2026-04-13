const axios = require('axios')

const baseURL = 'https://geocoding-api.open-meteo.com/v1/search'
// https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json
const name = 'Berlin'

const count = 10  

const lang = 'pt-br'

const format = 'json'  

const url = `${baseURL}?name=${name}&count=${count}&language=${lang}&format=${format}`

axios.get(url)
.then(res => {
    return res.data
})
.then(data => {
    return data.results
})
.then(results => {
    console.log(results[0].latitude)
    console.log(results[0].longitude)
    const lat = results[0].latitude
    const long = results[0].longitude
})