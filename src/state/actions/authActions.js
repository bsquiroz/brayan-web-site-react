export const types = {
    USER_LOGIN: "USER_LOGIN",
    USER_LOGOUT: "USER_LOGOUT",
};

export const userLogin = (value) => ({
    action: types.USER_LOGIN,
    payload: value,
});

export const userLogout = (value) => ({
    action: types.USER_LOGOUT,
    payload: value,
});
