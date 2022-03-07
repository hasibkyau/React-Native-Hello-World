import React from "react";
import { View, Modal, Image, Text, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

// const myButton = (
//     <Icon.Button
//       name="facebook"
//       backgroundColor="#3b5998"
//       onPress={this.loginWithFacebook}
//     >
//       Login with Facebook
//     </Icon.Button>
//   );

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
                <Icon name="trash" size={50} color="red"/>
                <Button onPress={()=>{
                    props.handleDeletePlace(props.place.key);
                }} title="Delete"/>
            </View>
            <View>
                <Button onPress={props.handleCancelItem} color="red" title="Cancel"/>
            </View>
        </Modal>
    )
}

export default PlaceDetails;