import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import {SvgFromUri} from 'react-native-svg';
interface PlantProps extends RectButtonProps{
    data:{
        name: string;
        photo: string;
    }
}
export const PlantCardPrimary = ({data, ...rest}: PlantProps)=>{

    return(
        <RectButton
        style={styles.container}
        {...rest}
        >
            <SvgFromUri
                uri={data.photo}
                width={70}
                height={70}
            />
            <Text style={styles.text}>
                {data.name}
            </Text>


        </RectButton>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 20,
        maxWidth: '50%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical:10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15,
        marginLeft:15

    },
    text:{
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical:16
        
    }
})