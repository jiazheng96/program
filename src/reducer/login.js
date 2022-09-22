import { GET_TOKEN } from '../actionTypes'
const defaultValue = {
    token: ''
}
function home (state = defaultValue, action) {
    switch(action.type) {
        case GET_TOKEN:
            return { ...state, token: action.payload }
        default:
            return state
    }
}