import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const DICOMViewer = () => {
  // Replace with your OHIF Viewer URL
  const username = 'deepak';
  const password = 'deepak';
  const ohifViewerUrl = `http://${username}:${password}@3.109.11.42:3011/segmentation?StudyInstanceUIDs=1.2.276.0.7230010.3.1.2.1381411976.1215.1720105571.133899&id=6687a1e84a7ac88502e80f68&userId=65e6e5e3f25f90c3c096be64&authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzQ3MTRhZGIzYTIyMTU2NjhhODBhOSIsImlhdCI6MTcyNDE1MDA5MCwiZXhwIjoxNzI0MTYwODkwfQ.-_5PPEu9bLMBoMnJf2L7MEUUQ6i2K4FFA8iUTzp-BLk&reportViewType=0`;
  const test = `http://${username}:${password}@192.168.1.4:3011/segmentation?StudyInstanceUIDs=1.2.276.0.7230010.3.1.2.1381411976.1409503.1719240530.679901&id=668cf5f8b2b853666da1b592&userId=65e6e5e3f25f90c3c096be64&authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzVhMDc5YThkYzExMjZlNTJkYmMxZCIsImlhdCI6MTcyNDIyNzcwNSwiZXhwIjoxNzI0MjM4NTA1fQ.7MtS7Lvo26aM1S0DlDHUkvbxmvDPWJfCVY1GRNIfGzs&reportViewType=0`;
  // get localhost ip in mac cmd:  ipconfig getifaddr en0
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: test}}
        style={styles.webview}
        onError={(error) => console.error('WebView error:', error)}
        onLoad={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.log('WebView loaded:', nativeEvent.url);
        }}
        nestedScrollEnabled={true}  // Enable nested scrolling
        scrollEnabled={true} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    width,
    height,
  },
});

export default DICOMViewer;
