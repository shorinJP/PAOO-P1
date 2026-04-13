const axios = require('axios')

const geoCodingBaseURL = 'https://geocoding-api.open-meteo.com/v1/search'

const forecastBaseURL = 'https://api.open-meteo.com/v1/forecast'

const name = 'Berlin'

const count = 10  

const lang = 'pt-br'

const format = 'json'  

const urlGeoCoding = `${geoCodingBaseURL}?name=${name}&count=${count}&language=${lang}&format=${format}`

axios.get(urlGeoCoding)
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
    const urlForecast = `${forecastBaseURL}?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature,wind_speed_10m`
    const climaTempo = async() => {
        try {
            const res = await axios.get(urlForecast)
            //console.log(res)
            console.log(res.data.current.temperature_2m)
            console.log(res.data.current.apparent_temperature)  
            console.log(res.data.current.wind_speed_10m)
            const tempAtual = res.data.current.temperature_2m
            const sensacaoTermica = res.data.current.apparent_temperature
            const velocidadeVento = res.data.current.wind_speed_10m
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    }
    climaTempo()

})