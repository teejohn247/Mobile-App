import { LOGIN_ACTION, LOGOUT_ACTION, USER_LOADED,REGISTER_SUCCESS } from "./actions";

// const reducer = (state = { isLoggedIn: false }, action) => {
//   switch (action.type) {
//     case LOGIN_ACTION:
//       return { ...state, isLoggedIn: true };
//     case LOGOUT_ACTION:
//       return { ...state, isLoggedIn: false };
//     default:
//       return state;
//   }
// };

const initialState = {
  // token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state= initialState, action){
  const { type, payload } = action
  switch(type){
      // case USER_LOADED:
      // return {
      // ...state,
      // isAuthenticated: true,
      // loading: false,
      // user: payload
      // }

      case LOGIN_ACTION:
              return { ...state, isLoggedIn: true };
      case LOGOUT_ACTION:
              return { ...state, isLoggedIn: false };

      // case REGISTER_SUCCESS:
      // return {
      //     ...state,
      //     isAuthenticated: true,
      //     loading: false,
      //     }
      // case LOGIN_ACTION:
      // localStorage.setItem('token', payload.token)
      // return {
      // ...state,
      // ...payload,
      // isAuthenticated: true,
      // loading: false,
      // }

      // case REGISTER_FAILED:
      // case LOGIN_FAIL:
      // case AUTH_ERROR:
      // case LOGOUT:
      // localStorage.removeItem('token')
      // return {
      // ...state,
      // token: null,
      // isAuthenticated: false,
      // loading: false,
      // }
      default:
      return state;
  }
}

// export default reducer;
