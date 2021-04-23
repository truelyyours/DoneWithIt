import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {
  const showToast = () => {
    ToastAndroid.showWithGravity(
      'Image clicked!!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };
  //   console.log(useDeviceOrientation());
  //   const {landscape} = useDeviceOrientation();

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'row',
      }}>
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }}
      />

      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
        }}
      />

      <View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
