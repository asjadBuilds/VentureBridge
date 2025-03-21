const BASE_URL = 'http://localhost:5000'

export const CONFIG = {
    registerUser: BASE_URL + '/api/auth/registerUser',
    loginUser: BASE_URL + '/api/auth/loginUser',
    getAllCategories: BASE_URL + '/api/product/getAllCategories',
    getProductsByCategory: BASE_URL + '/api/product/getProductsByCategory'
}