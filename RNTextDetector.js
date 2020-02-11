/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import firebase from 'react-native-firebase';
import React from 'react';
import { Text, View, Button, PermissionsAndroid, Platform,SafeAreaView,ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Dimensions } from "react-native";

import styles from './styles';

export default class RNTextDetectorHomeScreen extends React.Component {

  state = {
    imageText: [],
    result: "",
    wholeText: this.props.navigation.getParam('allText',''),
    temp:""
  }

  async requestReadPermissionGallery() {
    try {
      console.log("Open Gallery button clicked");

      const os = Platform.OS; // android or ios
      if (os === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          this.props.navigation.navigate('gallery',{
        }
          );
          this.getPhotos();
        } else {
          alert("Permissions Fail");
        }
      }
    } catch (err) {
      console.log(err.toString());
    }
  }
  handleTextInput = (text) => {
    // this.setState({wholeText: text })

      // REMOVE white spaces from each line 

    this.state.wholeText = text;
    // console.log(this.state.wholeText);
    // alert(this.state.wholeText);
 }
  componentDidMount() {
    const unitId =
      Platform.OS === 'ios'
        ? 'ca-app-pub-6806282339237533/7962615966'
        : 'ca-app-pub-6806282339237533/7962615966';
    const advert = firebase.admob().interstitial(unitId);
    const AdRequest = firebase.admob.AdRequest;
    const request = new AdRequest();
    advert.loadAd(request.build());
  
    advert.on('onAdLoaded', () => {
      console.log('Advert ready to show.');
      advert.show();
    });
  }
 
  render() {
    var screenWidth = Math.round(Dimensions.get('window').width);
    var screenHeight = Math.round(Dimensions.get('window').height);

    const Banner = firebase.admob.Banner;
    const AdRequest = firebase.admob.AdRequest;
    const request = new AdRequest();
    //ca-app-pub-3940256099942544/6300978111 test
    const unitId =
      Platform.OS === 'ios'
        ? 'ca-app-pub-6806282339237533/1168663826'
        : 'ca-app-pub-6806282339237533/1168663826';
        
    const imageText = this.props.navigation.getParam('text', '');
    
    const allText = this.props.navigation.getParam('allText','');

    // this.setState({wholeText:"TESTING1 " + allText});

    this.state.wholeText = allText;

    console.log("image text1 = ", imageText);
    // alert("wholetext from submit1 = " + imageText);

    // console.log("image text2 = ", allText);
    // alert("wholetext from submit2 = " + allText);

    // this.state.result = "";
    // for (let i = 0; i < imageText.length; i++) {
    //   this.state.result += imageText[i] + '\n';
    // }

    console.log("RNTextDetector render ");

    return (
      
    // <SafeAreaView style={styles.container}>
    // <ScrollView horizontal bounces={false}>

    //   <ScrollView style={styles.scrollView} alwaysBounceHorizontal={true}  nestedScrollEnabled
    //     bounces={false}>
        
    //     <Text>Home Screen.</Text> 
    //     <TextInput
    //       style={{ borderColor: 'gray', borderWidth: 1, width: '99%', }}
    //       // value={this.state.result}
          
    //       // value = {this.state.temp}
    //       onChangeText = {this.handleTextInput.bind(this)}
    //       value = {this.state.wholeText}
    //       multiline={true} 
    //     />

    //   </ScrollView>
    //   </ScrollView>

    <SafeAreaView style={styles.container}>
            <Text>Home Screen</Text>

            <View style={{flex:0.7,width:screenWidth-20,margin:10,borderWidth:2,borderColor:'green'}}>
              <ScrollView syle = {{ marginHorizontal: 10,}} horizontal bounces={false}>
              <ScrollView style={styles.scrollView} vertical alwaysBounceHorizontal={false}  nestedScrollEnabled
                  bounces={false}>   
       
            <TextInput style={{fontSize:20,padding:10,borderWidth:2,borderColor:'red',
                              width:'90%'}}  
                multiline={true} 
                editable
                // value = {this.state.editableText}
                // onChangeText={text => onChangeText(text)}
                // value = {value}
                value = {this.state.wholeText}
                onChangeText = {this.handleTextInput.bind(this)}
            />
              </ScrollView>
              </ScrollView>
            </View>


            {/* onChangeText = {this.handleTextInput.bind(this)} */}
                {/* value = {this.state.wholeText} */}
{/* 
    <Text>
        {"\n"}
      </Text> */}

        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>

            <Button
            title="Edit"
            onPress={() => this.props.navigation.navigate('Edit',{allText:this.state.wholeText})}
            />
        </View>

      <View style={{
        flexDirection:'row',
        flex:1,justifyContent: 'space-around'}}>

       <View style={{width: 120, height: 70}} >
          <Button
            title="open camera"
            onPress={() => this.props.navigation.navigate('camera')}
          />
        </View>

        <View style={{width: 120, height: 70}}>  
          <Button
            title="open gallery"
            onPress={this.requestReadPermissionGallery.bind(this)}
          />
        </View>
    
        </View>

        <Banner
          style={{position: 'absolute',bottom:0 }}
          unitId={unitId}
          size={'SMART_BANNER'}
          request={request.build()}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
        />
     
     
    </SafeAreaView>
 
    );
  }
}

RNTextDetectorHomeScreen.navigationOptions = {
  title: 'Home',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'royalblue'
    
 }
};