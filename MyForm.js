import React, { Component } from "react";
import { 
    View,
    Text,Button,Dimensions,
    StyleSheet,TouchableOpacity,TextInput,ScrollView,SafeAreaView,
} from "react-native";
// import {Form, Field} from 'simple-react-form'

class MyForm extends Component {
       
    constructor(props) {
        super(props);
        this.state = {
         text: this.props.navigation.getParam('allText',''),
         currentIndex:-1,
        //  listOfFields: ['name', 'rollNo', 'address'],
        }
        listOfFields = ['name', 'roll No', 'address','Mobile No','state','country','pincode','maritalStatus'];
        listOfValues  = ["","","","","","","",""];

        // process the incomming text and extract the info

        tempText = this.state.text;
        lines = tempText.split('\n');
        len = lines.length;
        // search and store

for(i=0;i<listOfFields.length;i++){
    searchTerm = listOfFields[i];
    searchTerm = searchTerm.toLowerCase();

    for(j=0;j<len;j++){
        currentLine = lines[j];
        tempLine = lines[j];
        tempLine = tempLine.toLowerCase();
       
    k=tempLine.search(searchTerm);
    if(k==0){
        k=k+listOfFields[i].length+1;
        while(k<tempLine.length){
            listOfValues[i]=listOfValues[i].concat(currentLine[k]);
            k++;
        }
        break;
    }
    }  
}      
    }
    FinalSubmit = () => {
        alert("Success!")
        this.props.navigation.navigate('RNTextDetector', {
          allText:"",
        });
      };
    render() {
        var screenWidth = Math.round(Dimensions.get('window').width);
        var screenHeight = Math.round(Dimensions.get('window').height);
        // alert(screenHeight+ " " + screenWidth);
        // alert(listOfFields[0]);
        // alert(tempText);
        // alert(lines.length);
        // console.log(lines);

        console.log(listOfFields);
        console.log(listOfValues);

        // console.log("TEXT = " + tempText);

        return (
            <SafeAreaView style={styles.container}>
                <View style={{width:'90%',flex:0.3,margin:10,borderWidth:2,borderColor:'green'}}>
                    <ScrollView horizontal bounces={false}>
                    <ScrollView vertical style={styles.scrollView} alwaysBounceHorizontal={true}  nestedScrollEnabled
                                                            bounces={false}>
                            <View style={{borderWidth:1, borderColor:'red',padding:5}}>
                                <Text>{this.state.text}</Text> 
                            </View>

                    </ScrollView>
                    </ScrollView>
                </View>
            
            <View style={[styles.container,{flex:0.8,width:'95%',padding:20,marginBottom:15,borderWidth:1,borderColor:'black'}]}>
                <ScrollView horizontal bounces={false}>
                <ScrollView vertical style={styles.scrollView} alwaysBounceHorizontal={true}  nestedScrollEnabled
                                                                bounces={false}>
                <View>
                <Text>Name:</Text>
                <TextInput style={{ borderColor: 'gray', borderWidth: 1,width: 300}}
                multiline={false} 
                editable
                defaultValue = {listOfValues[0].trim()}
                // value = {this.state.editableText}
                // onChangeText={text => onChangeText(text)}
                
            />
                <Text>Roll NO:</Text>
             <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 300 }}
                multiline={false} 
                editable
                defaultValue = {listOfValues[1].trim()}           
                // onChangeText = {this.handleEditText}
                // value = {this.state.editableText}
                // onChangeText={text => onChangeText(text)}
                
            />
            <Text>Address:</Text>
             <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 300 }}
                multiline={true} 
                editable
                defaultValue = {listOfValues[2].trim()}
                // value = {this.state.editableText}
                // onChangeText={text => onChangeText(text)}
                
            />
             <Text>Mobile No:</Text>
             <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 300 }}
                multiline={true} 
                editable
                defaultValue = {listOfValues[3].trim()}
                // value = {this.state.editableText}
                // onChangeText={text => onChangeText(text)}
                
            />
             <Text>State:</Text>
             <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 300 }}
                multiline={true} 
                editable
                defaultValue = {listOfValues[4].trim()}
                // value = {this.state.editableText}
                // onChangeText={text => onChangeText(text)}
                
            />
             <Text>Country:</Text>
             <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 300 }}
                multiline={true} 
                editable
                defaultValue = {listOfValues[5].trim()}
                // value = {this.state.editableText}
                // onChangeText={text => onChangeText(text)}
                
            />
             <Text>Pincode:</Text>
             <TextInput style={{ borderColor: 'gray', borderWidth: 1, width:300 }}
                multiline={true} 
                editable
                defaultValue = {listOfValues[6].trim()}
                // value = {this.state.editableText}
                // onChangeText={text => onChangeText(text)}
                
            />
             <Text>Marital Status:</Text>
             <TextInput style={{ borderColor: 'gray', borderWidth: 1, width: 300 }}
                multiline={true} 
                editable
                defaultValue = {listOfValues[7].trim()}
                // value = {this.state.editableText}
                // onChangeText={text => onChangeText(text)}
                
            />
             
            </View>
              </ScrollView>
            </ScrollView>
            </View>
            {/* <Text>{"\n"}</Text> */}
            <Button 
                title=" Final Submit "
                onPress={this.FinalSubmit.bind(this)}
            />
            <Text>{"\n"}</Text>
          
            </SafeAreaView>
        );
    }
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: "My Form",
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'royalblue'
            
         }
        };
      };
}
export default MyForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});