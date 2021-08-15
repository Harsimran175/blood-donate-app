import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/screen2';
import BookRequestScreen from '../screens/screen1';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: BookDonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Ur appointment",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book ur slots",
    }
  }
});
