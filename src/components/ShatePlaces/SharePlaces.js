import React, {useState} from "react";
import { View, Text } from "react-native";
import { shallowEqual } from "react-redux";
import InputPlace from '../InputPlace/InputPlace';
import { addPlace } from "../../redux/actionCreators";
import { connect } from "react-redux";  

const mapDispatchToProps = dispatch =>{
    return{
      addPlace: place => dispatch(addPlace(place)),
      
    }
  }

const SharePlaces = props => {
    const [inputValue, setInputValue] = useState("");
  
    return (
        <View>
            <InputPlace
                inputValue={inputValue}
                setInputValue={setInputValue}
                addPlace={props.addPlace}
            />
        </View>
    );
}

export default connect(null, mapDispatchToProps)(SharePlaces);