export default function authHeader() {
    // const user = JSON.parse(localStorage.getItem('user'));
    const jwt = localStorage.getItem("jwt");
    // if (user && user.jwtToken) {
    //     return { Authorization: 'Bearer ' + user.jwtToken };
    // }else{
    //     return {};
    // }
    
    if (jwt) {
        return { Authorization: 'Bearer ' + jwt };
    }else{
        return {};
    }
}