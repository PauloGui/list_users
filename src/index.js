import React from 'react';
import List from './pages/List';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.textHeader}>Candidatos</Text>
        <List />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
