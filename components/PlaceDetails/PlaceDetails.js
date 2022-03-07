import React from "react";
import { View, Modal, Image, Text, Button } from "react-native";

const PlaceDetails = props =>{
    return(
        <Modal>
            <Text>{props.place.value}</Text>
            <View>
                <Button title="Delete"/>
            </View>
        </Modal>
    )
}

export default PlaceDetails;