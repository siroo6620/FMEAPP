import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Landing = () => {
  return (
    <View style={styles.container}>
      <Text>Landing</Text>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    padding: normalize(20),
  },
});
