import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

export default function App() {
  return (
    
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Guilherme</Text>
      <StatusBar style="auto" />
      <ScrollView>
      <Text style={estilo.jogo}> CSGO M4A4</Text>
      <Image style={estilo.img} source={require("./assets/csgo.jpg")}/>
      <Text style={estilo.jogo}> CSGO KARAMBIT</Text>
      <Image style={estilo.img} source={require("./assets/csgo2.jpg")}/>
      <Text style={estilo.jogo}> CSGO AK-47</Text>
      <Image style={estilo.img} source={require("./assets/csgo3.jpg")}/>
    </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  titulo: {
    fontSize: 40,
    marginTop: 30,
    color:"red",
  },
  img: {
    width: 400,
    height:300,
    
  },
  jogo:{
    marginTop: 30,
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "bold"
  }
});
