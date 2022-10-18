import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebaseConnection'
import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Button} from 'react-native';





export default function Home(){
const [nome, setNome] = useState('');

useEffect(()=>{


    async function buscarNome(){


        await firebase.database().ref('Alunos/1/Nome').on('value',(snapshot) =>{
                
            setNome(snapshot.val())
    });
}
        buscarNome();

},[])



return(

    <View style = {{alignItems:'center'}}>

      <Text>{nome} </Text>
            
    </View>


);


}

const styles = StyleSheet.create({

    botao:{
        backgroundColor:'green',
        width:'80%',
        alignItems:"center",
        marginTop:10
    }

}
)