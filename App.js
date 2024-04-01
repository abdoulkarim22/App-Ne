import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import HeadLine from './components/HeadLine';
import Page from './components/Page';

export default function App() {
  return (
      <View style = {styles.container}>
        <Page/>
         <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});