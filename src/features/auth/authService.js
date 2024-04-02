import axios from 'axios';
//services are strictly for http requests

const API_URL = 'https://cookscorner-production-6571.up.railway.app/api/v1/auth/'

//register user
const register = async({ name, email, password, confirmPassword }) => {
    const response = await axios.post(API_URL + "register", { name, email, password, confirmPassword })

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//login user
const login = async({ email, password }) => {
    const response = await axios.post(API_URL + "login", { email, password })

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem('refreshToken', response.data.refreshToken)
    }
    return response.data
}

//logout
const logout = async() => {
    localStorage.removeItem('user')
}
const authService = {
    register,
    logout,
    login,
}

export default authService