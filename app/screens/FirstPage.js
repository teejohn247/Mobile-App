import React from 'react';
import { StyleSheet, Text, View,  ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';
import { NavigationService } from "../navigator";
import { SocialIcon } from 'react-native-elements';

const FirstPage = ({navigation}) =>  {
  return (
    <ImageBackground source={require('../../assets/home.jpg')} style={styles.headerbg}>
        <View style={styles.gheader}>
            <View style={styles.iheader}>
            <Image source={require('../../assets/log.png')} style={styles.logo}/>
            </View>
            <View style={{marginTop:40, marginLeft:20}}>
            <Text style={styles.name}>Welcome.</Text>
            <Text style={styles.liner}>This is My App</Text>
            </View>
        
        </View>
        <View style={styles.part}>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Register')}}>
           <Text style={styles.buttontext}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={()=>{navigation.navigate('Login')}}>
           <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>Don't have an account? Create account</Text>
        </View>
        {/* <View style={styles.icon}>
        <SocialIcon
        raised={false}
         type='twitter'
        //  style={{padding: 0, width:'10%'}}
        />
        <SocialIcon
        raised={false}
        type='facebook'
        />
       
      </View> */}

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    headerbg:{
    flex: 1,

     width:'100%',
     height:Dimensions.get('window').height,
     position:'relative',
     resizeMode:'cover',
    //  alignSelf: 'auto',
    },
    gheader:{
        // height:'100%',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        // backgroundColor: 'rgba(0,0,0,0.6)'
    },
    iheader:{
        width:160,
        height:160
    },
    logo:{
        // flex: 1,
        width:65,
        height:95,
        marginLeft:20,
        marginTop:'60%'
        // borderRadius:100,
        // borderColor:'#fff',
        // borderWidth:5
    },
    name:{
        color:'#fff',
        fontSize: 25,
        fontWeight: 'bold'
    }, 
    liner:{
        color:'#fff',
        // fontStyle:'italic',
        fontWeight: 'bold',
        fontSize:25
    },
    part:{
        flex: 1,
        marginTop:'20%',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'#414446',
        paddingVertical:15,
        width: Dimensions.get('window').width - 40,
        paddingLeft:10,
        borderRadius:30 ,
        marginBottom:10,
        shadowColor: 'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:3
    },
    button2:{
        backgroundColor:'#347AEC',
        paddingVertical:15,
        width: Dimensions.get('window').width - 40,
        paddingLeft:10,
        borderRadius:30 ,
        marginBottom:10,
        shadowColor: 'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:3
    },
    buttontext:{
      color:'white',
      textAlign:'center'
    },
    text2:{
        color:'#414446',
        marginTop:10
    },
    icon:{
        flexDirection:'row',
        // marginTop:'20%',
        justifyContent:'center',
    }
 
});
export default FirstPage;

