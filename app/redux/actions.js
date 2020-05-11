import { NavigationService } from "../navigator";
import { Alert } from "react-native";
import axios from "axios";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const LOGIN_ACTION = "LOGIN_ACTION";
export const USER_LOADED = "USER_LOADED";
export const LOGOUT_ACTION = "LOGOUT_ACTION";



// export const login = (loginInput) => {
//   // const { username, password } = loginInput;
//   return async (dispatch) => {  // don't forget to use dispatch here!
//     try {
//           const response = await fetch(LoginUrl, {
//               method: 'POST',
//               headers: {
//                   Accept: 'application/json',
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(loginInput),
//           });
//           const json = await response.json();
//           if (json.msg === 'success') { // response success checking logic could differ
//               dispatch(setLoginState({ ...json })); // our action is called here
//           }
//           else {
//               Alert.alert('Login Failed', 'Username or Password is incorrect');
//           }
//       }
//       catch (err) {
//           Alert.alert('Login Failed', 'Some error occured, please retry');
//           console.log(err);
//       }
//   };
// };


// export const setLoginState = (loginData) => {
//   return {
//     type: t.SET_LOGIN_STATE,
//     payload: loginData,
//   };
// };

export const login = (formData) => async dispatch => {
  console.warn(formData)

  const config = {
      headers: {
      'content-type': 'application/json'
      }
  }
  // const body = JSON.stringify({name, email, password});
  try {
      const res = await axios.post('https://api.funplugz.com/api/login', formData, config);
      // alert(JSON.stringify(res))

        dispatch({ type: LOGIN_ACTION });
        NavigationService.navigate("Logout");
  } catch(err){
      console.log(err.response.data.error)
      const errors = err.response.data.error
      Alert.alert('error', errors)
  }
}

export const register = (formData) => async dispatch => {
  console.warn(formData)

  const config = {
      headers: {
      'content-type': 'application/json'
      }
  }
  // const body = JSON.stringify({name, email, password});
  try {
      const res = await axios.post('https://api.funplugz.com/api/register', formData, config);
      alert(JSON.stringify(res))

        dispatch({ type: LOGIN_ACTION });
        NavigationService.navigate("Login");
  } catch(err){
      console.log(err.response.data.error)
      const errors = err.response.data.error
      Alert.alert('error', errors)
  }
}

// export const login = () => dispatch => {
//   dispatch({ type: LOGIN_ACTION });
//   NavigationService.navigate("Logout");
// };

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_ACTION });
  NavigationService.navigate("Login");
};
