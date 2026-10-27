import { Text, Image, Button, View } from "react-native";

export const Saludo2 = () => {
    return (
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
            <Text>Hola RN: Soy un componente Compuesto</Text>
            
            {/* Si tienes la imagen wave.png en assets: */}
            <Image 
                source={require('../assets/wave.png')} 
                style={{ width: 50, height: 50, resizeMode: 'contain' }} 
            />

            <Button title="Presiona para Saludar" />
        </View>
    );
};