const BASE_URL = 'https://venturebridge-backend-production.up.railway.app'

export const CONFIG = {
    registerUser: BASE_URL + '/api/auth/registerUser',
    loginUser: BASE_URL + '/api/auth/loginUser',
    //product
    getAllCategories: BASE_URL + '/api/product/getAllCategories',
    getProductsByCategory: BASE_URL + '/api/product/getProductsByCategory',
    addProduct: BASE_URL+'/api/product/createProduct',
    getProductById: BASE_URL + '/api/product/getProductById',
    //userInfo
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
    editUserLanguage: BASE_URL + '/api/user/editUserLanguage',
    //chat
    getUserConversations: BASE_URL + '/api/chat/getConversations',
    getMessagesByConversation: BASE_URL + '/api/chat/getMessages',
    sendMessage: BASE_URL + '/api/chat/sendMessage',
    getSingleConversation: BASE_URL + '/api/chat/getSingleConversation'

}