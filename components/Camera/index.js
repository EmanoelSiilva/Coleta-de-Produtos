import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleCameraReady = () => {
    if (isOpen) {
        setIsOpen(true)
    } else {
        setIsOpen(false)
        setIsOpen(Camera.Constants.Type.front)
    }
  }

  return (
    <View style={styles.container}>
       {isOpen ? (
          <Camera type={type} style={styles.camera} onCameraReady={handleCameraReady}>
            <TouchableOpacity onPress={() => setIsOpen(isOpen)} style={styles.buttonClosed}>
                <Text>Fechar câmera</Text>
            </TouchableOpacity>
          </Camera>
        ): (
            <View style={styles.containerButtonOpen}>
                <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.buttonOpen}>
                    <AntDesign name='camera' size={26} color='#000' />
                </TouchableOpacity>
            </View>
            
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  camera: {
    flex: 1,
    width: 1000
  },
  barcodeContainer: {
    backgroundColor: '#1ff',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  barcodeText: {
    color: '#000',
    fontSize: 16,
  },
  buttonOpen: {
    backgroundColor: "#E67E22",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonClosed: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    margin: 300,
    alignSelf: 'center'
  },
  containerButtonOpen: {
    margin: 100,
    height: 50,
    width: 100,
    alignItems: 'center'
  }
});
