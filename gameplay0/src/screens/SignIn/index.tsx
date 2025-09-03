import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { stylesSignIn } from './style';

export function SignIn() {
  return (
    <View style={stylesSignIn.container}>
      <Text>Aqui será construído a tela de entrada</Text>
      <TextInput style={{height:50,width:200,borderBottomWidth:2}} />
      <StatusBar style="auto" />
    </View>
  );
}

