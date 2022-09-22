import { GET_TOKEN } from '../actionTypes'
const defaultValue = {
    homeList: '',
    total: 0
}
function home (state = defaultValue, action) {
    switch(action.type) {
        case GET_TOKEN:
            return { ...state, token: action.payload }
        default:
            return state
    }
}