import { SET_CODE_JS, SET_CODE_PY } from './code_type';

export const setLangJs = (valueCodeJs) => {
    return {
        type: SET_CODE_JS,
        payload: valueCodeJs,
    }
}

export const setLangPy = (valueCodePy) => {
    return {
        type: SET_CODE_PY,
        payload: valueCodePy,
    }
}
