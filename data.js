/*for loading and processing of data*/
const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq3r3HIqIF97uAFdTKBAeDoa3QxozYiB7PQQ0NlGVrou1I=";
const headers = {
    "Accept": 'application/json',
    "Authorization": API_KEY
}

/*
async function search() {
    let ll = "14.5995,120.9842";
    let query = "Mall";
    let response = await axios.get(BASE_API_URL + '/places/search',{
        "headers": headers,
        "params": {
            'll':ll,
            'query':query
        }
    })
    console.log(response.data)
}
*/

async function search (lat, lng, query) {
    let ll = lat+","+lng;
    let response = await axios.get(BASE_API_URL + "/places/search", {
        "headers": headers,
        "params":{
            'll': ll,
            'query': query
        }
    })
    return response.data;
    }

