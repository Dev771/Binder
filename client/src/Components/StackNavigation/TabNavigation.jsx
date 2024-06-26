import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../Screens/Home/Home';
import TinderIcon from '../../public/img/Tindersmallicon.png';
import { Image } from 'react-native';

const TabNavigation = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator  screenOptions={{ headerShown: false, tabBarShowLabel: false }} >
            <Tab.Screen options={{ tabBarIcon: () => <Image source={TinderIcon} />,  }} name='Home Page' component={Home} ></Tab.Screen>
            <Tab.Screen name='Home Page 2' component={Home} ></Tab.Screen>
        </Tab.Navigator>

    )
}

export default TabNavigation;