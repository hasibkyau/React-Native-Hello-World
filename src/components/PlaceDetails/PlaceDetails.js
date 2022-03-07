import React from "react";
import {StyleSheet, View, Modal, Image, Text, Button, Touchable, TouchableOpacity } from "react-native";
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
            
            <View style={styles.button}>
                <TouchableOpacity onPress={()=>{
                    props.handleDeletePlace(props.place.key);
                }}>
                <Icon name="trash" size={60} color="red"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.handleCancelItem}>
                <Icon name="times-circle" size={60} color="green"/>
                </TouchableOpacity>
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    button: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    }
  });
  

export default PlaceDetails;