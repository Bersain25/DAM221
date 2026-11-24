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
                    <Button title="Pract:Pressable"                              onPress={ ()=>setScreen('pressable')}> </Button>
                    <Button title="Pract:TextInput & Alert"                      onPress={ ()=>setScreen('textinput')}> </Button>
                    <Button title="Pract:FlatList & SectionList"                  onPress={ ()=>setScreen('flatlist')}> </Button>
                    <Button title="Pract:ImageBackgroung & SlapshScreen"             onPress={ ()=>setScreen('image')}> </Button>
                    <Button title="Pract:Modal & Bottom sheet"                       onPress={ ()=>setScreen('modal')}> </Button>
                    <Button title="Pract:ActivityIndicator, KeyboardAvoidingView" onPress={ ()=>setScreen('activity')}> </Button>

                </View>

            );
   } //switch
} //funcion

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})