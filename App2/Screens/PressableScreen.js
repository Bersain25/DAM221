import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Switch } from 'react-native';

export default function PressableScreen() {
    const [mensaje, setMensaje] = useState('Presiona el boton');
    const [activado, setActivado] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Pressable</Text>
            <Text> {mensaje} </Text>

            <Pressable
                onPress={()=> setMensaje('Boton Presionar')}
                onPressIn={()=> console.log('inicio de pulsacion bro')}
                onPressOut={()=> console.log('Fin de la pulsacion bro')}
                onLongPress={()=> setMensaje('Pulsacion Prolongada')}
                disabled = {false}
                style={({ pressed }) => [
                    styles.boton,
                    pressed && styles.botonPresionado



                ]}                   
                
            >
                
                
                <Text style ={styles.textoBoton}>Presioname</Text>
                </Pressable>

                <View style={styles.separador}/>

                <Text style={styles.titulo}>Switch</Text>

                <Text>
                    Estado : {activado ? 'Activado' : 'Desactivado'}
                    </Text>

                    <Switch
                    
                    value={activado}
                    onValueChange={setActivado}
                    disabled={false}
                    trackColor={{false: '#b6030399', true: '#26ce5b'}}
                    thumbColor={activado ? '#ffffff' : '#eeeeee'}
                    />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        blackgroundColor: '#f2f2f2',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    boton: {
        backgroundColor: '#319b80',
        padding: 15,
        borderRadius: 10,
        marginTop: 15,
    },
    botonPresionado: {
        backgroundColor: '#1e6655',
    },
    textoBoton: {
        color: 'white',
        fontSize: 16,
    },
    separador: {
        height: 2,
        backgroundColor: '#cccccc',
        width: '90%',
        marginVertical: 35,
    },
});