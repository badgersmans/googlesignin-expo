import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// web id 427483537446-02egbblism33cet0caqbp4nbgrak897q.apps.googleusercontent.com
// web secret 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
// ios x427483537446-rl4ab2uji8mi7olvbsqcf90ldacbr38r.apps.googleusercontent.com
// android 427483537446-7a0f2ccbr7alflsufodff5uk9e074dk8.apps.googleusercontent.com
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
