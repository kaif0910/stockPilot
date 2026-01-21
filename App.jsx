import { Text, View, Image, Pressable, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24, fontWeight: 'bold', }}>App</Text>
      <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg' }}
        style={{ width: 50, height: 50 }}
      />

      <Pressable style={{ padding: 10, backgroundColor: 'yellow' }} onPress={() => Alert.alert('Pressed!')}>
        <Text>Press Me</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;
