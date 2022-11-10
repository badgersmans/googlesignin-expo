import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null)
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '427483537446-02egbblism33cet0caqbp4nbgrak897q.apps.googleusercontent.com',
    webClientId: '427483537446-02egbblism33cet0caqbp4nbgrak897q.apps.googleusercontent.com',
    iosClientId: 'x427483537446-rl4ab2uji8mi7olvbsqcf90ldacbr38r.apps.googleusercontent.com',
    androidClientId: '427483537446-7a0f2ccbr7alflsufodff5uk9e074dk8.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication: {accessToken} } = response;
      // console.log(accessToken);
      setAccessToken(accessToken)

      accessToken && fetchUserInfo();
    }
  }, [response, accessToken]);

  async function fetchUserInfo() {
    let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    const userInfo = await response.json();
    setUser(userInfo)
  }

  return (
    <View style={styles.container}>

      {
        user ? (
          <Text>{ JSON.stringify(user) }</Text>
          ) : (
            <Button
              disabled={!request}
              title="Sign In With Google"
              onPress={() => {
                promptAsync();
              }}
            />
          )
      }
      <StatusBar style="auto" />
    </View>
  );
}
// web id 
// web secret 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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

