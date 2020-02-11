import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,ScrollView,SafeAreaView,
} from "react-native"; 
import {Dimensions } from "react-native";


// import { TextInput } from "react-native-gesture-handler";
import { TextInput } from 'react-native';

class Edit extends Component {
    constructor(props) {
        super(props);
        console.log("Edit screen");
        var textFromPrevScreen = this.props.navigation.getParam('allText','');
        // alert(textFromPrevScreen);
        // textFromPrevScreen = textFromPrevScreen.trim();
        // alert(textFromPrevScreen);

        this.state = {
         editableText: textFromPrevScreen,        }
        this.handleEditText = this.handleEditText.bind(this);

      }
      handleEditText = (text) => {
       
        this.state.editableText = text;
         console.log(this.state.editableText);
      //  alert(this.state.editableText);
     }
     GoBack = () => {
        this.props.navigation.navigate('RNTextDetector', {
          allText:this.state.editableText,
        });
      };
      sendToForm = () => {
        this.props.navigation.navigate('MyForm', {
          allText:this.state.editableText,
        });
      };

    render() {
           // alert(this.state.editableText);
           var screenWidth = Math.round(Dimensions.get('window').width);
           var screenHeight = Math.round(Dimensions.get('window').height);

          //  alert(screenWidth + " " + screenHeight);

        return (
          <SafeAreaView style={styles.container}>
            <Text>Edit Screen</Text>
            <View style={{flex:0.7,width:screenWidth-20,margin:10,borderWidth:2,borderColor:'green'}}>
              <ScrollView syle = {{ marginHorizontal: 10,}} horizontal bounces={false}>
              <ScrollView style={styles.scrollView} vertical alwaysBounceHorizontal={false}  nestedScrollEnabled
                  bounces={false}>   
       
            <TextInput style={{fontSize:20,padding:10,borderWidth:2,borderColor:'red',
                              }}  
                multiline={true} 
                editable
                // value = {this.state.editableText}
                // onChangeText={text => onChangeText(text)}
                // value = {value}
                defaultValue={this.state.editableText}
                onChangeText = {this.handleEditText}
            />
              </ScrollView>
              </ScrollView>
            </View>

             <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
            <Button 
                title="SEND NOW"
                onPress={this.sendToForm.bind(this)}
            />
             <Text>
        {"\n"}
      </Text>
             
            <Button
                title=" Back "
                onPress={this.GoBack.bind(this)}
            /> 
        
        </View>
        
    </SafeAreaView>
        );
    }
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: "Edit",
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'royalblue'
            
         }
        };
      };
}
export default Edit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});