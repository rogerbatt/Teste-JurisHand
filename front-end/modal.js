import { StyleSheet, Text, View, Image } from "react-native";

const ModalView = () => {

  return (
    <View style={styles.centeredView}>
        <Text style={styles.textTop}>Faça upgrade no JurisHand e seja feliz</Text>
        <Image
            style={styles.image}
            source={require('./assets/Jobs.png')}
        />
        <Text style={styles.textBottom}>Assine por <Text style={styles.textStrong}>R$ 299,90 por ano</Text></Text>
        <Text style={styles.textBottom}>(R$ 24,90 por mês)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    centeredView:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    image:{
        marginVertical: 20        
    },
    textTop: {
        color: "black",
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",

    },
    textStrong: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    textBottom: {
        color: "black",
        fontSize: 20,
    },
});

export default ModalView;