import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import colors from "../styles/colors";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import userImg from '../assets/perfil.png';
import { Jost_800ExtraBold } from "@expo-google-fonts/jost";
import fonts from "../styles/fonts";
export function Header(){
    return(
        <View style={styles.container}>
            <View>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.userName}>Wesleson</Text>
            </View>
            <Image source={userImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        padding:20 
    },
    image:{
        width : 120,
        height: 120,
        borderRadius: 60,

    },
    greeting:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName:{
        fontSize: 32,
        fontFamily: fonts.heading,
        color:colors.heading,
        lineHeight: 40

    }
})