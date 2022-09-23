import { GET_TOKEN } from '../actionTypes/index';
import { LoginApi } from '../utils/api'
export const loginHome = (payload) => {
    return {
        type: GET_TOKEN,
        payload: LoginApi(payload)
    }
}