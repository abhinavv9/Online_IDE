import { combineReducers } from "redux";
import runReducer from './run/stateRun';
import langReducer from './languages/lang_reducer';
import codeReducer from './code/code_reducer';


const rootReducer = combineReducers({
    language: langReducer,
    code: codeReducer,
    run: runReducer,
})

export default rootReducer;