import axios from "axios"

const http = axios.create({
    baseURL: "https://three-points.herokuapp.com/api",
    withCredentials: true
})

http.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if(error?.response.status === 401) {
            localStorage.removeItem('userId')
            window.location.replace('/login')
        }
    }
)

export const ThreePointsLogin = (username, password) => http.post('/login', { username, password })

export const getUserId = (userId) => http.get(`/users/${userId}`)

export const getPosts = () => http.get('/posts')

export const giveLike = (postId) => http.post(`/posts/${postId}/like`)

export const ThreePointsLogout = () => http.post('/logout')