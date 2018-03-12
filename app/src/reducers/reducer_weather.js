import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // State is array because we will have multiple cities coming in
    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
            // In Redux we never mutate/manipulate a state, we always return a completely new instance of state, so that's we are using Array.concat (instead of IE Array.push) because it creates a new array with all the old and new stuff
            // ES6 way of 'state.concat([action.payload.data])' is [ action.payload.data, ...state ], but with this ES6 method the new data is at the front of the array, whereas with concat the new data is at the back
    }

    return state;
}
