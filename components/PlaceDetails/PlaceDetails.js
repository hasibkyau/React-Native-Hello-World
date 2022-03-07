import React from "react";
import { View, Modal, Image, Text, Button } from "react-native";

const PlaceDetails = props =>{
    return(
        <Modal>
            <Image style={{
                width:"100%",
                height:200
                }} 
                source={props.place.image}/>
            <Text style={{
                textAlign:"center",
                fontSize:40,
            }}>{props.place.value}</Text>
            
            <View>
                <Button onPress={()=>{
                    props.handleDeleteItem(props.place.key);
                }} title="Delete"/>
            </View>
            <View>
                <Button onPress={props.handleCancelItem} color="red" title="Cancel"/>
            </View>
        </Modal>
    )
}

export default PlaceDetails;