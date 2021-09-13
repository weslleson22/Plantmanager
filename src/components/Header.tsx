import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import colors from "../styles/colors";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import userImg from '../assets/perfil.png';
export function Header(){
    return(
        <View style={styles.container}>
            <View>
            <Text>Olá,</Text>
            <Text>Wesleson</Text>
            </View>
            <Image source={userImg}/>
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
        
    }
})