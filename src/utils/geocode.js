const request = require('request')

const geoCode= (address, callback)=>{
    const GeoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicm91c2hhbmsiLCJhIjoiY2tnaGprZWV3MDZiYTJ0bHZqNml4aGdmYiJ9.33vtjzX0KrxVzppA4idF4Q&limit=1'
    request({ url: GeoUrl, json: true }, (error, response) => {
            if (error) {
               callback('Unable to connect to Geo servive!')
            }
            else if(response.body.features.length==0){
                callback('Unable to find the geo location')
            }
            else {
                const latitude = response.body.features[0].center[1];
                const longitude = response.body.features[0].center[0];
                const location= response.body.features[0].place_name
                let data ={
                    latitude, //shorthand syntx in Es6 if both properties name are same
                    longitude:longitude,
                    location:location
                }
                callback(undefined, data)
            }
        })
}
module.exports = geoCode