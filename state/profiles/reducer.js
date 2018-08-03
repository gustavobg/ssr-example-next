import {PROFILES} from './types';

const initialState = {
    profiles: [],
    profile: {},
    isFetching: false,
    showError: false,
    message: ''
};

/**
 * TODO:
 * improve implementation
 * this is just for testing purpouses
 */
const profiles = (state = initialState, action) => {
    switch (action.type) {
        case PROFILES.ALL:
            return {
                ...state,
                isFetching: true
            };
        case PROFILES.BY_ID:
            return {
                ...state,
                isFetching: true,
            };
        case PROFILES.FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                showError: true,
                message: action.payload
            };
         case PROFILES.FETCH_SUCCESS:
            return {
                ...state,
                profile: action.payload
            };
        case PROFILES.FETCH_SUCCESS_ALL:
            return {
                ...state,
                profiles: action.payload
            };
        case PROFILES.RESET:
            return {
                ...state,
                showError: false,
                message: ''
            };
        default:
            return state;
    }
};

export default profiles;
