import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { useState } from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatri }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <View style={estilos.tarjeta}>
            <Text style={estilos.textoNombre}>{nombre}</Text>

            {mostrar && (
                <View style={{ marginVertical: 5 }}>
                    <Text>Carrera: {carrera}</Text>
                    <Text>Materia: {materia}</Text>
                    <Text>Cuatrimestre: {cuatri}</Text>
                </View>
            )}

            <Button title={mostrar ? "Ocultar perfil" : "Ver perfil"} onPress={() => setMostrar(!mostrar)} />
        </View>
    );
};

const estilos = StyleSheet.create({
    tarjeta: {
        marginVertical: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        width: '100%',
    },
    textoNombre: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    }
});
