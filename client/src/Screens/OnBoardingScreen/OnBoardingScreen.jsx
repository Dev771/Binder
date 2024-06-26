import React from 'react'
import { Image, Text, TouchableHighlight, View, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import TinderPng from '../../public/img/TinderIcon.png';
import GlobalStyles from '../../public/css/GlobalStyles';
import styles from './Styles';

const OnBoardingScreen = ({ navigation }) => {

    const signInOptions = ["Google", "Apple ID", "Phone Number", "Facebook"];

    return (
        <View style={styles.OnBoarding}>
            <LinearGradient colors={['#EE805F', '#EA4080']} start={[1, 0]} end={[0, 1]} style={styles.OnBoardingBackgroundGradient}  >
                <Image style={styles.Image} source={TinderPng} alt='Tinder'/>
                <Text style={[GlobalStyles.textInput]}>By tapping Create Account or Sign In, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.</Text>
                <View style={styles.ButtonGroup}>
                    {signInOptions.map((option) =>
                        !((option === 'Apple ID') !== (Platform.OS === 'ios')) ? (
                            <TouchableHighlight key={option} style={styles.SignInButton} underlayColor={'#fff'} onPress={() => navigation.navigate("MainComponent")}>
                                <Text style={GlobalStyles.textInput}>Sign In With {option}</Text>
                            </TouchableHighlight>
                        ) : (null) 
                    )}
                </View>
            </LinearGradient>
        </View>
    )
}

export default OnBoardingScreen