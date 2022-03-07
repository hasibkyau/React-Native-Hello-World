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
                        props.addPlace([{ 
                            key: Math.random().toString(), 
                            value: props.inputValue,
                            image: {
                                uri:"https://i.pinimg.com/originals/e7/9f/d1/e79fd1bc7fa3b1f6a952f637221def30.jpg"
                            }
                        }]);
                        props.setInputValue("")
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
        padding: 10,
        width: "100%",
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default InputPlace