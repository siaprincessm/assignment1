const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq3r3HIqIF97uAFdTKBAeDoa3QxozYiB7PQQ0NlGVrou1I=";
const headers = {
    "Accept": 'application/json',
    "Authorization": API_KEY
}

async function search() {
    let ll = "14.6760,121.0437";
    let query = "Jollibee";
    let response = await axios.get(BASE_API_URL + '/places/search',{
        "headers": headers,
        "params": {
            'll':ll,
            'query':query
        }
    })
    console.log(response.data)
}