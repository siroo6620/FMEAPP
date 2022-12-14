import { useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import { normalize } from "../../services";
import { useFocusEffect } from "@react-navigation/native";
import ButtonCustom from "../../components/ButtonCustom";
import { useDispatch } from "react-redux";
import { registerActions } from "../../store/reducers/registerSlice";
import { ShowToast } from "../../services/toastConfig";

import Constant from "../../constants";
const { Font, Color, ImageList } = Constant;

const WelcomeMessage = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(registerActions.clearState());
  }, []);

  return (
    <ImageBackground
      style={styles.image}
      resizeMode="cover"
      source={require("../../assets/fmeapp.png")}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageMain}
            resizeMode="cover"
            source={require("../../assets/logo1.png")}
          />
        </View>
        <View style={styles.section}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Hi 👋 Welcome to the Farming Made Easy App!
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonCustom
              onPress={() => navigation.navigate("Login", { role: "" })}
              // onPress={() => ShowToast.success("testing toast multiline handling")}
              style={styles.button}
              title="Login"
            />
            <View style={styles.button}></View>
            <ButtonCustom
              title="Sign Up"
              onPress={() => navigation.navigate("Welcome")}
            />
          </View>
          <View style={styles.gap}></View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  gap: {
    margin: normalize(30),
  },
  buttonContainer: {
    width: "60%",
  },
  button: {
    margin: normalize(10),
  },
  textContainer: {
    width: "80%",
  },
  text: {
    letterSpacing: 1,
    fontFamily: Font.MontserratBold,
    fontSize: normalize(30),
    color: Color.darkGreen,
  },

  container: {
    flex: 1,
    padding: normalize(15),
  },
  image: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: normalize(40),
  },
  imageMain: {
    width: normalize(100),
    height: normalize(100),
  },
  section: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});

export default WelcomeMessage;
