import { Jost_100Thin_Italic } from "@expo-google-fonts/jost";
import React from "react";
import {
    View,
    StyleSheet,
    Text
} from "react-native";
import colors from "../styles/colors";

export function PlantSelect(){
    return(
        <View style={styles.container}>
            <Text>Selecionar Plantar</Text>
        </View>
    )
} 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    }
})