import { types } from "../actions/authActions";

const initial_state = {
    seccion: false,
};

const authReducer = (state = initial_state, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
        case types.USER_LOGOUT:
            return {
                ...state,
                seccion: action.payload,
            };

        default:
            return state;
    }
};

export default authReducer;
