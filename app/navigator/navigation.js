import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { Login, Logout } from "../screens";
import Login from "../screens/Login";
import Logout from "../screens/Logout"
import FirstPage from "../screens/FirstPage";
import Register from "../screens/Register";



const AppNavigator = createStackNavigator({
  FirstPage: {
    screen: FirstPage, 
    navigationOptions: {
      header: null,
  },
  },
  Login: {
    screen: Login,
      navigationOptions: {
      header: null,
  },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
  },
  },
  Logout: {
    screen: Logout,
    navigationOptions: () => ({
      headerLeft: null
    })
  }
});

export default createAppContainer(AppNavigator);
