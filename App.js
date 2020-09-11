import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.bgGradient}
        colors={['#02A637', '#00E952', '#02A637']}
      >
        <Text style={styles.headline}>EZ Golf Scorecard</Text>
        <StatusBar style="auto" />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#02A637',
  },
  bgGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  headline: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
