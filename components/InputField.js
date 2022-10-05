import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { normalize } from "../services";
import { farmerColor } from "../constants/colors";
import fonts from "../constants/fonts";

const InputField = ({ title, value, secureTextEntry, number, colorAlt }) => {
  const [input, setInput] = value;

  const setInputValue = (text) => {
    if (number) {
      if (isNaN(text)) {
        // Its not a number
      } else setInput(text);
    } else {
      setInput(text);
    }
  };

  const inputStyle = colorAlt === true ? styles.inputColorWhite : styles.input;
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputFontSize}>{title}</Text>
      <TextInput
        style={inputStyle}
        autoCapitalize="none"
        placeholderTextColor="white"
        value={input}
        onChangeText={(text) => setInputValue(text)}
        secureTextEntry={secureTextEntry ? true : false}
        keyboardType={number ? "numeric" : "default"}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputFontSize: {
    fontFamily: fonts.MontserratSemiBold,
    fontSize: normalize(16),
    marginVertical: normalize(8),
    color: farmerColor.tabBarIconSelectedColor,
  },
  input: {
    fontFamily: fonts.MontserratSemiBold,
    padding: normalize(10),
    backgroundColor: farmerColor.lighterGreen,
    borderRadius: normalize(8),
  },
  inputColorWhite: {
    fontFamily: fonts.MontserratSemiBold,
    padding: normalize(10),
    backgroundColor: farmerColor.white,
    borderRadius: normalize(8),
  },
});
