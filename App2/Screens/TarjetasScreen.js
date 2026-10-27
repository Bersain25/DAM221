import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Saludo } from '../components/Saludo';
import { Saludo2 } from '../components/Saludo2';
import { Perfil } from '../components/Perfil';

export default function TarjetasScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Saludo />
            <Saludo2 />

            <Perfil nombre="LULU" carrera="TIID" materia="movil" cuatri="4" />
            <Perfil nombre="RENATA" carrera="TIID" materia="movil" cuatri="4" />
            <Perfil nombre="LUISA" carrera="TIID" materia="movil" cuatri="4" />

            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});