import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceList from '../PlaceLIst/PlaceList';
import { connect } from 'react-redux';
import { deletePlace } from '../../redux/actionCreators';

const mapDispatchToProps = dispatch =>{
  return{
    deletePlace: place => dispatch(deletePlace(place))
  }
}
const matStateToProps = state =>{
  return{
    placeList : state.placeList
  } 
}
const FindPlaces = props => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelectedPlace = key =>{
    const place = props.placeList.find(place => {
      return place.key === key;
    })
    setSelectedPlace(place)
  }
  
  const handleDeletePlace = key =>{
    props.deletePlace(key);
    setSelectedPlace(null);
  }

  const handleCancelItem = key =>{
    setSelectedPlace(null);
  }

  let placeDetails = null;
  if(selectedPlace !== null){
    placeDetails = <PlaceDetails 
    place = {selectedPlace}
    handleDeletePlace={handleDeletePlace}
    handleCancelItem = {handleCancelItem}/>
  }

  return (
    <View style={styles.container}>
      
      
    <PlaceList 
    placeList = {props.placeList} 
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

export default connect(matStateToProps, mapDispatchToProps)(FindPlaces);