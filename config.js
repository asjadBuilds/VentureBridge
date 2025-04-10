const BASE_URL = 'http://localhost:5000'

export const CONFIG = {
    registerUser: BASE_URL + '/api/auth/registerUser',
    loginUser: BASE_URL + '/api/auth/loginUser',
    getAllCategories: BASE_URL + '/api/product/getAllCategories',
    getProductsByCategory: BASE_URL + '/api/product/getProductsByCategory',
    addProduct: BASE_URL+'/api/product/createProduct',
    getProductById: BASE_URL + '/api/product/getProductById',
    getUserInfo: BASE_URL+'/api/user/getUserInfo',
    updateUserInfo: BASE_URL + '/api/user/updateUserInfo',
    updateUserRole: BASE_URL + '/api/user/updateUserRole',
    getUserProducts: BASE_URL+'/api/product/getUserProducts',
    addUserEducation: BASE_URL+'/api/user/addUserEducation',
    addUserExperience: BASE_URL+'/api/user/addUserExperience',
    addUserCertification: BASE_URL+'/api/user/addUserCertification',
    addUserLanguage: BASE_URL+'/api/user/addUserLanguage',
    editUserEducation: BASE_URL + '/api/user/editUserEducation',
    editUserExperience: BASE_URL + '/api/user/editUserExperience',
    editUserCertification: BASE_URL + '/api/user/editUserCertification',
    editUserLanguage: BASE_URL + '/api/user/editUserLanguage'

}