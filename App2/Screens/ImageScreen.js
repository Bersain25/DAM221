import { StyleSheet, View, Text } from 'react-native';

export default function SafeScreen() {
    return (
        
        <View style={styles.container}>

            <Text> Practica 10 </Text>
            <Text> Bersain </Text>

        </View>

    );
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