import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../context/auth";

const Login = () => {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <View style={styles.spacing} />
      <Button title="Sign In" color="orange" onPress={signIn} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  spacing: {
    height: 50,
    // marginVertical: 50,
  },
});
