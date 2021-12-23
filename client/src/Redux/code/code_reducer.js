import { SET_CODE_JS, SET_CODE_PY } from './code_type';

const initialState = {
    codeJs: 'console.log("Hello, World");',
    codePy: "print('Hello, World')",
}

const codeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CODE_JS: return {
            ...state,
            codeJs: action.payload,
        }
        case SET_CODE_PY: return {
            ...state,
            codePy: action.payload
        }
        default: return state
    }
}

export default codeReducer;