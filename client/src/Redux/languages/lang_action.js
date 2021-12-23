import { SET_LANG } from './lang_types';


export const setLang = (language = 'JavaScript') => {
    return {
        type: SET_LANG, 
        payload: language
    }
}