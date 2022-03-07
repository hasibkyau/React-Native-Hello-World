import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SharePlaces from "../ShatePlaces/SharePlaces";
import FindPlaces from "../FindPlaces/FindPlaces";

const Tab = createBottomTabNavigator();


const navigationTab = pros =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Share places" component={SharePlaces}/>
            <Tab.Screen name="FInd Places" component={FindPlaces}/>
        </Tab.Navigator>
    )
}

export default navigationTab;