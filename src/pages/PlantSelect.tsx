import { Jost_100Thin_Italic, Jost_400Regular } from "@expo-google-fonts/jost";
import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    
} from "react-native";

import { FlatList } from "react-native"; 
import { EnviromentButton } from "../components/EnviromentButton";
import { Header } from "../components/Header";
import api from "../services/api";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
//Contin
interface EnviromentPros{
    key: string;
    title: string;
}
export function PlantSelect(){
    const [enviroments, setEnvirtoments]= useState<EnviromentPros[]>([]);

    useEffect(() =>{
        async function fetchEnviroment() {
            const {data} = await api.get('plants_environments');
            setEnvirtoments([
                {
                    key:'all',
                    title: 'Todos',
                },
                ...data
            ]);
        }
        fetchEnviroment();
    },[])

  
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Header/>
                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subtitle}>
                    Você quer colocar sua planta?
                </Text>
               
            </View>
            <View>
               <FlatList 
                data={enviroments}
               
                renderItem={({ item }) => (
                    <EnviromentButton 
                        title={item.title}
                        
                        
                        
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.enviromentList}
               />
           </View>
            
            
        </View>
    )
} 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background
    },
    header:{
        paddingHorizontal:30
    },
    title:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight:20,
        marginTop:15

    },
    subtitle:{
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading
    },
    enviromentList:{
        height: 40,
        justifyContent: 'center',
        paddingBottom:1,
        marginLeft: 10,
        marginVertical: 32
    }
})