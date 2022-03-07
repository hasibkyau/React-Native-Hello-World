import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const InputPlace = props => {
    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.textInput}
                placeholder="Add a Place.."
                value={props.inputValue}
                onChangeText={ text => props.setInputValue(text)}
            />
            <Button
                title="Add"
                onPress={() => {
                    if (props.inputValue !== "") {
                        props.setPlaceList([...props.placeList, { key: Math.random().toString(), value: props.inputValue }])
                    }
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    
    textInput: {
        width: "80%",
        borderBottomWidth: 1,
        borderColor: "green",
        padding: 7
    },
    inputView: {
        padding: 20,
        width: "100%",
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default InputPlace