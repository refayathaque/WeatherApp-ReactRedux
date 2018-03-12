import axios from 'axios';
// Axios is a library used to make AJAX requests from the browser, similar to jquery

const API_KEY = 'c881c45c4d9cd6390857b57502e48666';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// ${API_KEY} is ES6 syntax, these are called template strings, note the backtick surround the entire url string

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    // Axios makes the AJAX call and returns a promise (promise here doesn't actually contain any of our data), this is asynchoronous in nature, redux promise makes asynchrous code look synchronous and helps to clean up our code

    return {
        type: FETCH_WEATHER,
        payload: request
        // We are returning the promise as the payload, the object in the payload is the promise
    };
}

// Redux promise is a middleware, middlewares can stop or manipulate actions before they hit any reducers
// In this case it checks to see if the action has a promise as a payload, and it does by virtue of our axios AJAX call, so the middleware stops the action, and only after the promise has been resolved (when we get our response from the axios AJAX call) it creates a new action and sends it to the reducers
// Redux promise essentially 'unwraps' a promise for us
