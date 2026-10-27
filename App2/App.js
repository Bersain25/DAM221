import { StyleSheet, View, Text } from 'react-native';
import MenuScreen from './Screens/MenuScreen';


export default function App() {
    return (
        
        <View style={styles.container}>

            <MenuScreen></MenuScreen>

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