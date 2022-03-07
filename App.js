import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceList from './components/PlaceLIst/PlaceList';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelectedPlace = key =>{
    const place = placeList.find(place => {
      return place.key === key;
    })
    setSelectedPlace(place)
  }

  const handleDeleteItem = key =>{
    setPlaceList(
      placeList.filter(place => place.key !== key)
    );
    setSelectedPlace(null);
  } 

  const handleCancelItem = key =>{
    setSelectedPlace(null);
  }

  let placeDetails = null;
  if(selectedPlace !== null){
    placeDetails = <PlaceDetails 
    place = {selectedPlace}
    handleDeleteItem={handleDeleteItem}
    handleCancelItem = {handleCancelItem}/>
  }

  return (
    <View style={styles.container}>
      <InputPlace
      inputValue = {inputValue}
      setInputValue = {setInputValue}
      placeList = {placeList}
      setPlaceList = {setPlaceList}
      />
      
    <PlaceList 
    placeList = {placeList} 
    handleSelectedPlace = {handleSelectedPlace}/>
    {placeDetails}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }
});