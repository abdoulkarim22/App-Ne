import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
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