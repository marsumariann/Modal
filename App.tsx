import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (

      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Modal
          animationType='slide'
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          
          <View style={styles.modalPage}>
            <View style={styles.modalBox}>

              <Text> This is a modal... </Text>
            <Pressable
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.closeText}> Close </Text>
            </Pressable>
          </View>
        </View>

          </Modal>

          <Pressable
          onPress={() => setModalVisible(true)}>
            <Text> Show modal message </Text>
          </Pressable>

        </SafeAreaView>
      </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50, 
  },

  modalPage: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },

  modalBox: {
    alignItems: 'center',
    height: '45%',
    width: '100%',
    padding: 25,
    gap: 25,
    backgroundColor: 'rgb(248, 248, 248)',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },

  closeText: {
    fontWeight: 'bold',
  },

});
