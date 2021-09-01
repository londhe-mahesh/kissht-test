import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderComp from './Register/HeaderComp'
import Register from './Register/Register';
import Navigator from './routes/homeStack'
import Home from './Register/Home';

export default function App() {
  const [user, setUser] = useState({});

  return (
      <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: "auto"
  },
});
