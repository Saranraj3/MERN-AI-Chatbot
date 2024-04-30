const ServerDomain = 'http://localhost:4000'

const API = {
    Signup: {
        url: `${ServerDomain}/api/signup`,
        method: 'post'
    },
    Login: {
        url: `${ServerDomain}/api/login`,
        method: 'post'
    }

}

export default API;