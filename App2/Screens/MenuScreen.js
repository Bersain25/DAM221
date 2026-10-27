import { Activity, useState } from 'react';
import { Button, StyleSheet, View, Text, FlatList } from 'react-native';
import TarjetasScreen from './TarjetasScreen';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageScreen from './ImageScreen';
import ModalScreen from './ModalScreen';
import ActivityInScreen from './ActivityInScreen';

export default function MenuScreen() {
   const[screen,setScreen]= useState('menu'); 

   switch(screen){
    case 'tarjetas':
        return <TarjetasScreen/>
    case 'safe':
        return <SafeScreen/>
    case 'pressable':
        return <PressableScreen/>
    case 'textinput':
        return <TextInputScreen/>
    case 'flatlist':
        return <FlatListScreen/>    
    case 'image':
        return <ImageScreen/>
    case 'modal':
        return <ModalScreen/>
    case 'activity':
        return <ActivityInScreen/>                
    case 'menu':
        default:
            return (
        
                <View style={styles.container}>
                    <Text> Menu de practicas </Text>
                    <Button title="Pract:Tarjetas"                               onPress={ ()=>setScreen('tarjetas') }> </Button>
                    <Button title="Pract:SafeAreaView"                               onPress={ ()=>setScreen('safe') }> </Button>
                    <Button title="Pract:Pressable"                              onPrees={ ()=>setScreen('pressable')}> </Button>
                    <Button title="Pract:TextInput & Alert"                      onPrees={ ()=>setScreen('textinput')}> </Button>
                    <Button title="Pract:FlatList & SectionList"                  onPrees={ ()=>setScreen('flatlist')}> </Button>
                    <Button title="Pract:ImageBackgroung & SlapshScreen"             onPrees={ ()=>setScreen('image')}> </Button>
                    <Button title="Pract:Modal & Bottom sheet"                       onPrees={ ()=>setScreen('modal')}> </Button>
                    <Button title="Pract:ActivityIndicator, KeyboardAvoidingView" onPrees={ ()=>setScreen('activity')}> </Button>

                </View>

            );
   } //switch
} //funcion

const styles = StyleSheet.create({
    container: {
        flex:1,
        blackgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})