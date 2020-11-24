exports.UserSerializer = (data) => {
    return {
        email: data.email,
        user_name: data.user_name,
        password: data.password
    }
};