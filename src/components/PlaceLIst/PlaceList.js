import React from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
    return(
        <FlatList style={{
            width: "100%"
          }}
            data={props.placeList}
            renderItem={info => {
              return (
                <ListItem 
                placeName={info.item.value} 
                image = {info.item.image}
                onItemPressed={() => props.handleSelectedPlace(info.item.key)} />
              );
            }}
          />
    );
}

export default PlaceList;