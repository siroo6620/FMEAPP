import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React, { useState } from "react";
import Layout from "./Layout";
import { normalize } from "../Helpers";
import InputField from "../components/InputField";
import ButtonCustom from "../components/ButtonCustom";

import Constant from "../../constants";

const { Color, Font } = Constant;
const ForgotPasswordPN = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Layout {...props}>
      <View style={styles.container}>
        <View>
          <Text style={styles.signUpText}>Forgot Password?</Text>
        </View>
        <View>
          <Text style={styles.signUpTextSub}>
            Please enter the Phone number registered to your account
          </Text>
        </View>
        <View style={styles.signUpForm}>
          <InputField
            title="Phone Number"
            value={[phoneNumber, setPhoneNumber]}
          />
        </View>
        <View style={styles.button}>
          <ButtonCustom
            title="Procced"
            onPress={() =>
              props.navigation.navigate("VerifyAccount", {
                text: "Please confirm you own this account,\nInput the verification code sent to your phone number",
                resetPassword: true,
              })
            }
          />
        </View>
      </View>
    </Layout>
  );
};

export default ForgotPasswordPN;

const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(10),
    flex: 1,
  },
  signUpText: {
    marginVertical: normalize(5),
    fontFamily: Font.MontserratSemiBold,
    fontSize: normalize(30),
    color: Color.darkGreen,
    letterSpacing: 0.5,
  },
  signUpTextSub: {
    marginVertical: normalize(30),
    fontFamily: Font.MontserratSemiBold,
    fontSize: normalize(16),
    letterSpacing: 1,
    color: Color.semiLightGreen,
  },

  signUpForm: {
    marginTop: normalize(10),
  },
  button: {
    marginTop: normalize(30),
    width: "60%",
  },
});
