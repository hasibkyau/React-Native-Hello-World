import { StatusBar } from 'expo-status-bar';
import {ScrollView, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';
import ListItem from './components/ListItem';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] =useState([]);

  const list = placeList.map((item, i) => {
    console.log(item);
    return (
      <ListItem 
      key = {i}
      placeName = {item}
      onItemPressed={()=>alert(item)}
      />
    )
  })

  return (
    // View = div
    <View style={styles.container}> 
    {/* Text = p tag */}
      <View style={styles.inputView}>
        <TextInput
        style = {{
          width: 200,
          borderBottomWidth: 1,
          borderColor: "green",
          padding: 7
        }}
        placeholder='Add a Place...'
        value={inputValue}
        onChangeText = {text => setInputValue(text)}
        />
        <Button
        onPress={() => {
          if(inputValue != ""){
            setPlaceList([...placeList, inputValue])
          }
          
        }}
        title='Add'
        />
      </View> 
      <ScrollView style = {{
        width:"100%"
      }}>
        {list}
      </ScrollView>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection : 'column'
  },
  inputView:{
    padding: 20,
    width: '80%',
    marginTop: 50,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center'
  }
});
