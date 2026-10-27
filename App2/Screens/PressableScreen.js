import { Activity, useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import MenuScreen from './MenuScreen';

export default function SafeScreen() {
    const[screen,setScreen]= useState('regreso');
    switch(screen){
        case 'menu':
            return <MenuScreen/>
        case 'regreso':
            default:    
    return (
        
        <View style={styles.container}>

            <Button title="Pract:Regresar" onPress={ ()=>setScreen('menu') }> </Button>
            
            <Text> Practica 10 </Text>
            <Text> Alvaro o Alan </Text>

        </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        blackgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})