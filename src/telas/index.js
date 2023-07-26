import React from "react";
import { Text,StyleSheet, View,Image } from "react-native";
import Texto from "../componentes/Texto.js";
import foto from "../../assets/Fotos/foto.jpg";
import * as ImageManipulator from 'expo-image-manipulator';

export default function app(){

    return<View style={estilos.alinhar}>
        <Texto style={estilos.titulo}>Carteirinha Digital</Texto>
     
            <View style={estilos.container}>
                 <Image source={foto} style={estilos.foto}/>
                <Texto> Maicon Eduardo Correia</Texto>
                
                <Texto>Data de Nascimento</Texto>
                <Texto>06/05/1993</Texto>
                <Texto>Turma: 400</Texto>
                <Texto>Matrícula: 123456</Texto>
                <Texto>CPF: 16144366733</Texto>
                <Texto>Nome do Responsável: {'\n'}João da silva souza</Texto>
                <Texto>Rua Alfa, nº 76, Base Aerea Naval, {'\n'}São Pedro da Aldeia - RJ</Texto>
                <Texto> Validade</Texto>
                <Texto> 01/01/2025 </Texto>
            
            </View>
        
        
    </View>
}

const estilos =StyleSheet.create({
    titulo:{
        width: "100%",
       // position: "absolute",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 30,
        padding: 16,
        fontWeight: "bold",
        color: "#FFFAF0",
    },
    container:{
      width: "95%",
       height: "90%",
      alignItems:"center",
       // alignSelf: "center",
        //flexDirection:"column",
      //  position: 'absolute',
      //  right: "2.5%",
      //  bottom: "2.5%",
        backgroundColor: "#FFFAF0",
       borderRadius: 15,
      // justifyContent: "space-around"
      justifyContent: "scretch"
    },
    foto:{
        width:112.5,
        height:150,
        //top:"5%", 
       
                  
    },
    alinhar:{
        justifyContent: "space-between",
		alignItems:"center",
    }

})