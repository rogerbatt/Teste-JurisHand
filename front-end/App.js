import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, SafeAreaView, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalView from "./modal";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#0005"
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable
            style={[styles.xclose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon name="close" size={30} color="#7666FC"/>
          </Pressable>

            <ModalView/>

            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textButton}>Assine Agora</Text>
            </Pressable>

          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textFooter}>Você será cobrado Imediatamente.</Text>
          <Text style={styles.textFooter}>Sem período trial.</Text>
        </View>
      </Modal>

      <View style={styles.viewNormal}>
        <Text style={styles.config}>Configurações</Text>
        <Pressable
          style={styles.upgrade}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="refresh" size={25} color="gray"/>
          <Text style={styles.textHome}>
            Faça upgrade agora
          </Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  
  modalView: {
    marginVertical: 60,
    backgroundColor: "#E2E6EA",
    alignItems: "flex-end",
    borderRadius: 5,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 20
  },

  button: {
    borderRadius: 5,
    paddingHorizontal: 60,
    paddingVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderColor: "#FC6CAD",
    borderWidth: 2,
  },

  textButton: {
    color: "#FC6CAD",
    fontWeight: "bold",
    fontSize: 20
  },

  textHome: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20
  },

  viewNormal:{
    margin: 30
  },

  upgrade:{
    marginTop: 30,
    flexDirection: "row",
  },
  
  config:{
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },

  footer:{
    marginBottom: 30
  },
  textFooter:{
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  }
});

export default App;