const SET_RUN = 'SET_RUN'

export function setRun() {
    return {
        type: SET_RUN
    }
}

const initialState = {
    run: false
}

export default function runReducer(state = initialState, action) {
    switch (action.type) {
        case SET_RUN: return {
            ...state,
            run: true
        }
        default: return state
    }
}
