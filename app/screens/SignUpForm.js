import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput,
    TouchableWithoutFeedback, Keyboard, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Dimensions, ImageBackground} from 'react-native';
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { useForm, Controller, } from 'react-hook-form';
// import { login } from "../redux";
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
// import { FormControlLabel, Radio, Button, FormControl,RadioGroup, Container } from '@material-ui/core'
import { register } from "../redux/actions";
import Select from "react-select";
import { Input } from 'react-native-elements';



const SignUpForm = ({ register }) => {
  // const onLogin = (formData) => {
  //   console.log("Login");
  //   login(formData);
  // };

//   const [selectedValue, setSelectedValue] = React.useState('User');

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    alert(JSON.stringify(data))
    register(data)
   }


  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <SafeAreaView>
    <View style={styles.container}>
        <Controller
        as={Input}
        control={control}
        name="fullname"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
        inputContainerStyle={{borderBottomWidth:0}} placeholder="fullname" placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} style={{fontSize: 2}}
         leftIcon={
            <Icon
              name='person'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />
          } />
          {/* {errors.fullname && <Text>This is required.</Text>} */}
          {errors.fullname && <Text style={{ color:'red', paddingHorizontal:20 }}>Full Name is required.</Text>}

        <Controller
            as={Input}
            control={control}
            name="email"
            onChange={args => args[0].nativeEvent.text}
            rules={{ required: true }}
            defaultValue=""
            placeholder="Email"  
        inputContainerStyle={{borderBottomWidth:0}} placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} 
         leftIcon={
            <Icon
              name='mail'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
              /> 
         
               }  />
          {errors.email && <Text style={{ color:'red', paddingHorizontal:20 }}>Email is required.</Text>}

         <Controller
            as={Input}
            control={control}
            name="phone"
            onChange={args => args[0].nativeEvent.text}
            rules={{ required: true }}
            defaultValue=""
            placeholder="Phone Number" 
        inputContainerStyle={{borderBottomWidth:0}} placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} 
         leftIcon={
            <Icon
              name='phone'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
              /> 
               }  />
          {errors.phone && <Text style={{ color:'red', paddingHorizontal:20 }}>Phone Number is required.</Text>}

         <Controller
            as={Input}
            control={control}
            name="password"
            onChange={args => args[0].nativeEvent.text}
            rules={{ required: true }}
            defaultValue=""
            placeholder="Password" secureTextEntry={true} 
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
          {/* <Controller
            as={Radio}
            control={control}
            name="radio"
            checked={selectedValue === 'user'}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'User' }}
            defaultValue="user"
           />

          <Controller
            as={Radio}
            control={control}
            name="radio"
            checked={selectedValue === 'vendor'}
            value="vendor"
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Vendor' }}
            defaultValue="vendor"
           /> */}
           {/* <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      /> */}

{/* <Controller
        as={<Select options={options} />}
        control={control}
        rules={{ required: true }}
        onChange={([selected]) => {
          // Place your logic here
          return selected;
        }}
        name="reactSelect"
        defaultValue={{ value: "chocolate" }}
      /> */}

          {errors.password && <Text style={{ color:'red', paddingHorizontal:20 }}>Password is required.</Text>}
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>

            <Text style={styles.buttontext}>Register</Text>
        </TouchableOpacity>
        {/* <Text style={{color:'#fff', marginLeft:'60%',}}>Forgot Password?</Text> */}

    </View>
    </SafeAreaView>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    margin:20
  },
  input:{
    //   width: Dimensions.get('window').width - 70,
    //   height: 40,
    // paddingVertical:5,
      backgroundColor: 'rgba(255,255,255, 0.8)',
      marginBottom:10,
      paddingLeft:10,
      borderColor:'black',
      borderRadius:30, 
      elevation:3
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
SignUpForm.propTypes = {
    register: PropTypes.func.isRequired
  };
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        register: register
      },
      dispatch
    );
  
  export default connect(
    null,
    mapDispatchToProps
  )(SignUpForm);

