import { GET_TOKEN } from '../actionTypes'

const defaultValue = {
    token: ''
}
function login (state = defaultValue, action) {
    switch(action.type) {
        case GET_TOKEN:
            const loginToken = async () => {
                const res  = await action.payload
                if(res.errCode === 0) {
                    localStorage.setItem('token', res.data['cms-token'])
                    return { ...state, token: res.data['cms-token']}
                }
            }
            return loginToken()
        default:
            return state
    }
}
export default login;