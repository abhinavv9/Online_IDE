import { SET_LANG } from './lang_types';

const initialState = {
    language: 'JavaScript'
}

const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANG: return {
            ...state,
            language: action.payload
        }
        default: return state
    }
}

export default langReducer;