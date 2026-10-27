import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';

export default function SafeScreen() {
  const canciones =[
    'RIKI',
    'Me Ha Costado',
    'Cuando te Bese',
    'King of Watches',
    'babydoll',
    'Party MJ',
    'SI NO ES CONTIGO',

  ];
  return (
  <SafeAreaView style={styles.container}>

<Text style = {styles.titulo}> MUSICA </Text> 

<View
style={styles.reproductor}>
    <Text style={styles.texto}>
        lista de musica
    </Text>
    <Text> la musica mas escuchada </Text>


</View>

<Text style={styles.subtitulo}> Canciones disponibles </Text>

<ScrollView style={styles.lista}

contentContainerStyle={styles.contenidoLista}
showsVerticalScrollIndicator={true}



>
    {canciones.map((item, index)=> (
        <View key={index}
        style={styles.tarjeta}>
        <Text
            style={styles.textoLista}>{item}</Text>
        </View>
    ))}
</ScrollView>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        blackgroundColor: '#ffffff',
        padding: 20,


    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        
    },
    reproductor: {
        blackgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
    },
    texto:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    lista: {
        flex:1,
    },
    tarjeta: {
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 10,
        borderRadius: 15,
    },
    textoLista: {
        fontSize: 18,
        textAlign: 'center',
    },
    
});