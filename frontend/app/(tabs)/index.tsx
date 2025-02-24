import { useState } from 'react';
import { StyleSheet, TextInput, Button, Alert, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = {
  navigate: (screen: string) => void;
};

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Congratulations');
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <View style={styles.background}>
      <ThemedText type="title" style={styles.appTitle}>Fridge App</ThemedText>
      <View style={styles.container}>
        <ThemedText type="title" style={styles.loginTitle}>Login</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A1CEDC',
  },
  appTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  container: {
    width: '60%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    gap: 12,
  },
  loginTitle: {
    color: 'black',
  },
  input: {
    width: '80%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: '#000',
    backgroundColor: '#FFF',
    textAlign: 'center',
  },
});
