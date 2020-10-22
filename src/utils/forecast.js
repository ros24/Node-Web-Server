const request = require('request')

const foreCast= ({latitude, longitude}= {}, callback)=>{  //destructuring will take only required property from data object
    const forecasturl='http://api.weatherstack.com/current?access_key=27c7b087b51423845735a105f70ba63e&query=' + latitude +','+ longitude
    request({ url: forecasturl, json: true }, (error, response) => {
            if (error) {
                callback('Unable to connect to weather servive!')
            }
            else if(response.body.error){
                callback('Unable to find the location')
            }
            else {
                callback(undefined,response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip + '% chance of rain.')
            }
        })
}
module.exports = foreCast;