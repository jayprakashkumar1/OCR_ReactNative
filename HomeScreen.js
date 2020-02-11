/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Button, Text, View,Image,ImageBackground,Dimensions} from 'react-native';
import styles from "./styles.js";
// const resizeMode = 'contain';

var screenWidth = Math.round(Dimensions.get('window').width);
var screenHeight = Math.round(Dimensions.get('window').height);

const HomeScreen = ({ navigation }) => (
 
  <View style={styles.container}>
    <Text style={styles.title}>React Native OCR</Text>


     <ImageBackground
            style={[styles.container,{
          backgroundColor: '#666699',
        
          position: 'absolute',
          width: '100%',
          height: '100%', 
          opacity:0.9,
          flex:1,
          resizeMode:'stretch',
          
          transform: [{ rotate: '0deg' }], /* change the deg (degree of rotation) between 0deg, 360deg*/
         
         }]}
           source={require('./images/literature-3033196_1280.jpg')} 
         >
           {/* <Text style={[styles.title,{fontSize:25,color:'black'}]}>React Native OCR</Text> */}
          
          {/* <View style={[{ width: "90%", height:'90%',margin: 10, backgroundColor: "#3973ac",
                     alignItems: "center",justifyContent: "center" }]}> */}
              <View style={{margin:20}}>
                    <Button
                    title="   Optical Character Recognition  "
                    onPress={() => navigation.navigate('RNTextDetector',{allText:""})}
                    style={[styles.button,{fontSize:20,}]}
                  />
              </View>
        {/* </View> */}
         </ImageBackground>
         
         </View>
);

export default HomeScreen;
