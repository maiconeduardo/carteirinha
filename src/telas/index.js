import React from "react";
import { Text,StyleSheet, View,Image } from "react-native";
import Texto from "../componentes/Texto.js";
import foto from "../../assets/Fotos/foto.jpg";
import * as ImageManipulator from 'expo-image-manipulator';
import { Shadow } from 'react-native-shadow-2';
import Logo from '../../assets/eacr.png';


export default function app(){

    return<View style={estilos.containerPrincipal}>

        <Texto style={estilos.titulo}>Carteirinha Digital</Texto>
        
            <View style={estilos.container}>
                <View style={estilos.containerFoto}>
                    <Image source={foto} style={estilos.foto}/>
                    <Texto style={estilos.nome}> Maicon Eduardo Correia</Texto>

                    <Texto style={estilos.textoData}>Data de Nascimento</Texto>
                    <Texto style={estilos.data}>06/05/1993</Texto>
                    <Texto style={estilos.textoData}>Validade da Carteirinha</Texto>
                    <Texto style={estilos.data}>01/01/2025</Texto>
                </View>
                <View style={estilos.containerDados}> 
                    <Texto style={estilos.textoDados}>TURMA</Texto>
                    <Texto style={estilos.dados}>400</Texto>
                    <Texto style={estilos.textoDados}>CPF</Texto>
                    <Texto style={estilos.dados}>999.999.999-99</Texto>
                    <Texto style={estilos.textoDados}>MATRÍCULA</Texto>
                    <Texto style={estilos.dados}>123456</Texto>
                </View>
                <Image source={Logo}></Image>
                <Texto style={estilos.textoEndereco}>Rua Alfa, nº 76, Base Aerea Naval, São Pedro da Aldeia - RJ</Texto>

            
            </View>
        
        
    </View>
}

const estilos =StyleSheet.create({
    containerPrincipal:{
        justifyContent: "space-between",
		alignItems:"center",
    },
    titulo:{
        width: "100%",
       // position: "absolute",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 30,
        paddingTop: 40,
        //paddingBottom: 0,
        fontWeight: "bold",
        color: "#FFFAF0",
        
    },
    container:{
       width: "95%",
        height: "85%",
       alignItems:"center",
       backgroundColor: "#FFFAF0",
       borderRadius: 15,
        justifyContent: "space-around",
      //justifyContent: "scretch",


      
    },
    containerFoto:{
        alignItems:"center",
        shadowColor: "#00000",
        shadowOpacity: 50
    },
    foto:{
        width:112.5,
        height:150,
       // top:"5%", 
       
                  
    },


    nome:{
        fontSize:20,
        fontWeight: "bold",
        lineHeight: 26,
        padding:10,
    },
    textoData:{
        fontSize: 16,
        fontWeight: "normal",
        color: "#0FA4F8",
        lineHeight: 26,
    },
    data:{
        fontSize: 17,
        fontWeight: "normal",
        
    },
    containerDados:{
        alignItems:"center",
        borderColor: "#0FA4F8",
        borderWidth:2,
        paddingHorizontal: 80,
       
    },
    textoDados:{
        alignItems:"center",
        color: "#0FA4F8",
        fontSize: 15,
        lineHeight: 26
    },
    dados:{
        alignItems:"center",
        color: "#000000",
        fontSize: 20,
        lineHeight: 26
        
    },   
    textoEndereco:{
        fontSize: 12,

    }

})