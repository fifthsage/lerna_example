import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'design-system-example-ui-library';

const styles = StyleSheet.create({
  padding: 16,
});

const App: () => React$Node = () => (
  <View style={styles}>
    <Button />
  </View>
);

export default App;
