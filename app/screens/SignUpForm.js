import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Picker, View, ScrollView, Image, TextInput,
    TouchableWithoutFeedback, Keyboard, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Dimensions, ImageBackground} from 'react-native';
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { useForm, Controller, } from 'react-hook-form';
import { register } from "../redux/actions";
import { Input } from 'react-native-elements';



const SignUpForm = ({ register }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedValue, setSelectedValue] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = `{"fullname":"${name}","email":"${email}","phone":"${phone}","password":"${password}","role":"${selectedValue}"}`
        alert(data)
        register(data)
       }
 
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <SafeAreaView>
    <View style={styles.container}>
        <Input
        inputContainerStyle={{borderBottomWidth:0}} placeholder="fullname" placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} style={{fontSize: 2}}
        onChangeText={text => setName(text)}
        value={name}
         leftIcon={
            <Icon
              name='person'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
            />
          } />
        <Input
        placeholder="Email"  
        inputContainerStyle={{borderBottomWidth:0}} placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} 
        onChangeText={text => setEmail(text)}
        value={email}
         leftIcon={
            <Icon
              name='mail'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
              /> 
         
               }  />
         <Input
            placeholder="Phone Number" 
        inputContainerStyle={{borderBottomWidth:0}} placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} 
        onChangeText={text => setPhone(text)}
        value={phone}
         leftIcon={
            <Icon
              name='phone'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
              /> 
               }  />
         <Input
            placeholder="Password" secureTextEntry={true} 
        inputContainerStyle={{borderBottomWidth:0}} placeholderTextColor = "#999999"
        containerStyle = {styles.campusInputContainer} 
        onChangeText={text => setPassword(text)}
        value={password}
         leftIcon={
            <Icon
              name='lock'
              size={18}
              color='#999999'
              style={{ marginRight: 10 }}
              /> 
               }  />
              <View style={styles.campusInputContainer}>
                <Picker
        selectedValue={selectedValue}
        style={{ borderWidth: 10,
        borderColor: 'white', borderRadius:30, color:'#999999' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Select role" value="" />
        <Picker.Item label="User" value="user" />
        <Picker.Item label="Vendor" value="Vendor" />
      </Picker>
      </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttontext}>Register</Text>
        </TouchableOpacity>

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
    alignContent:'center',
    height:45,
    // padding: -20,
    borderRadius:30,
    shadowColor: 'black',
      shadowOpacity:0.26,
      shadowOffset:{width:0,height:2},
      shadowRadius:8,
      elevation:7,
      marginBottom:0
  },
  button:{
      backgroundColor: '#3379EC',
      paddingVertical:10,
      paddingLeft:10,
      borderRadius:30 ,
      marginBottom:10,
      marginVertical:5,
      marginTop:'5%',
      height:45,
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

