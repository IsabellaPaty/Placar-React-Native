import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [count7, setCount7] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const incrementCount2 = () => {
    setCount7(count7 + 1);
  };

  const zerar = () => {
    setCount(0);
  };

  const zerar1 = () => {
    setCount7(0);
  };

  return (
    <ImageBackground
      source={{
        uri:
          '',
      }}
      style={{
        flex: 1,
        justifyContent: 'center', // Ajustado para centralizar verticalmente
        resizeMode: 'cover',
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Jogador 1</Text>
        <Text style={styles.count}>{count}</Text>
        <Button title="+" onPress={incrementCount} style={styles.button} />
        <Button title="-" onPress={zerar} style={styles.button} />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Jogador 2</Text>
        <Text style={styles.count}>{count7}</Text>
        <Button title="+" onPress={incrementCount2} style={styles.button} />
        <Button title="-" onPress={zerar1} style={styles.button} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adicionado para tornar o texto mais legível
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Adicionado para garantir visibilidade do texto no plano de fundo
  },
  count: {
    fontSize: 30,
    marginBottom: 20,
    color: 'red', // Adicionado para garantir visibilidade do texto no plano de fundo
    fontWeight: 'bold',
  },
  button: {
    color: 'red', // Corrigido para 'button' ao invés de 'Button'
    marginBottom: 10,
    alignItems: 'right',
  },
});

