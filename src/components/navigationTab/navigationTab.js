import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SharePlaces from "../ShatePlaces/SharePlaces";
import FindPlaces from "../FindPlaces/FindPlaces";
import Icons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


const NavigationTab = pros =>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Share places" 
            component={SharePlaces}
            options={{
                tabBarIcon:({color, size}) =>(
                    <Icons name="ios-share" color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen 
            name="FInd Places" 
            component={FindPlaces}
            options={{
                tabBarIcon:({color, size}) =>(
                    <Icons name="md-map" color={color} size={size}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}

export default NavigationTab;