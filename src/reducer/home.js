import { GET_TOKEN } from '../actionTypes'
const defaultValue = {
    homeList: '',
    total: 0
}
function home (state = defaultValue, action) {
    switch(action.type) {
        case GET_TOKEN:
            console.log(action.payload);
            return { ...state, token: action.payload }
        default:
            return state
    }
}
export default home;