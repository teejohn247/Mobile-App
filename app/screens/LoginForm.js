import React, { useState } from 'react';
// import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, TextInput, Dimensions,
  TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback,
  SafeAreaView, Keyboard} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useForm, Controller, } from 'react-hook-form';
// import { login } from "../redux";
import { Input } from 'react-native-elements';
import { login } from "../redux/actions";


const LoginForm = ({ login }) => {
  // const onLogin = (formData) => {
  //   console.log("Login");
  //   login(formData);
  // };
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    alert(JSON.stringify(data))
    login(data)
   }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled keyboardVerticalOffset={100}>
    <SafeAreaView>
<View style={styles.container}>

<Controller
        as={Input}
        control={control}
        name="email"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
        inputContainerStyle={{borderBottomWidth:0}} placeholder="email" placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} style={{fontSize: 2}}
         leftIcon={
            <Icon
              name='person'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />
          } />
          {errors.email && <Text style={{ color:'red', paddingHorizontal:20 }}>Email is required.</Text>}
               <Controller
            as={Input}
            control={control}
            name="password"
            onChange={args => args[0].nativeEvent.text}
            rules={{ required: true }}
            defaultValue=""
            placeholder="password" secureTextEntry={true} 
        inputContainerStyle={{borderBottomWidth:0}} placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} 
         leftIcon={
            <Icon
              name='lock'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
              /> 
         
               }  />
          {errors.password && <Text style={{ color:'red', paddingHorizontal:20 }}>Password is required.</Text>}

   <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>

<Text style={styles.buttontext}>Login</Text>
</TouchableOpacity>
    <Text style={{color:'#999999', marginLeft:'60%'}}>Forgot Password?</Text>

</View>
</SafeAreaView>
</KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:'10%',
    paddingHorizontal:20,
    marginBottom:0
  },
  input:{
    //   width: Dimensions.get('window').width - 70,
    //   height: 40,
    // paddingVertical:5,
    //   backgroundColor: 'rgba(255,255,255, 0.8)',
    //   marginBottom:10,
    //   paddingLeft:10,
    //   borderColor:'black',
    //   borderRadius:30, 
    //   elevation:3
  },
  campusInputContainer: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginVertical:5,
    height:50,
    padding: -20,
    borderRadius:30,
    shadowColor: 'black',
      shadowOpacity:0.26,
      shadowOffset:{width:0,height:2},
      shadowRadius:8,
      elevation:3,
      marginBottom:0
  },
  button:{
      backgroundColor: '#3379EC',
      paddingVertical:10,
      // width: Dimensions.get('window').width - 70,
      paddingLeft:10,
      borderRadius:30 ,
      marginBottom:10,
      marginVertical:5,
      marginTop:'5%',
      height:50,
      shadowColor: 'black',
      shadowOpacity:0.26,
      shadowOffset:{width:0,height:2},
      shadowRadius:8,
      elevation:3

  },
  buttontext:{
      color:'white',
      textAlign:'center',
      marginTop:'2%'
  }

});

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: login
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);

