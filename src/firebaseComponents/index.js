import { View,Text, Image, StyleSheet } from "react-native";

 import React from "react";


 

 export default function CardAluno() {



    return (



        <View style={estilo.container}>

            <Image style = {estilo.imagem}source={{uri:'https://i.ytimg.com/vi/rVs5_UmLvVE/hqdefault.jpg'}} />

            <Text> Aluno </Text>

        </View>

    )

 }



 const estilo = StyleSheet.create ({

     container: {

         marginHorizontal: 5,

         backgroundColor: '#abcdef',

     },
     imagem :{
        width:130,
        height:120

     }

 })