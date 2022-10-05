import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { normalize } from "../../services";
import Loader from "../../components/Loader";
import Layout from "../../components/Layout";
import InputField from "../../components/InputField";
import { ShowToast } from "../../services/toastConfig";
import { postVerifyAccount } from "../../requests/auth";
import ButtonCustom from "../../components/ButtonCustom";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import Constant from "../../constants";

const { Color, Font } = Constant;
let otpCode = "";

const VerifyAccount = (props) => {
  const [loader, setLoader] = useState(false);

  const customBackHandler = () => {
    ShowToast.error("Please enter otp code before exiting");
  };

  const verify = async ({ code }) => {
    if (code) otpCode = code;

    if (otpCode.length != 6) {
      ShowToast.error("OTP is incomplete");
      return;
    }

    setLoader(true);
    postVerifyAccount({ code: otpCode })
      .then((res) => {
        if (res.data.success) {
          ShowToast.success("Verification Successful!");
          props.navigation.navigate("Success");
        } else {
          ShowToast.error(res.data.message);
        }
      })
      .catch((e) => {
        console.warn(e);
        ShowToast.error("Network Error");
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <Layout {...props} customBackHandler={customBackHandler}>
      {loader && <Loader visible={loader} />}
      <View style={styles.container}>
        <View>
          <Text style={styles.signUpText}>Verify Account</Text>
        </View>
        <View>
          <Text style={styles.signUpTextSub}>
            Enter the Six digit code sent to your phone number
          </Text>
        </View>
        <View style={styles.otp}>
          <OTPInputView
            pinCount={6}
            codeInputFieldStyle={styles.inputTileNew}
            onCodeFilled={(code) => verify({ code })}
          />
        </View>

        <View style={styles.button}>
          <ButtonCustom onPress={verify} title="Procced" />
        </View>
      </View>
    </Layout>
  );
};

export default VerifyAccount;

const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(10),
    flex: 1,
  },

  signUpTextSub: {
    marginVertical: normalize(5),
    marginTop: normalize(30),
    fontFamily: Font.MontserratSemiBold,
    fontSize: normalize(17),
    color: Color.semiLightGreen,
    letterSpacing: 0.5,
  },
  signUpText: {
    marginVertical: normalize(5),
    fontFamily: Font.MontserratSemiBold,
    fontSize: normalize(30),
    color: Color.darkGreen,
    letterSpacing: 1,
  },

  button: {
    marginTop: normalize(30),
    width: "60%",
  },

  otp: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: normalize(20),
    height: normalize(100),
  },

  inputTile: {
    backgroundColor: Color.lightGreen,
    width: "14%",
    padding: normalize(13),
    borderRadius: normalize(8),
    textAlign: "center",
    elevation: 1,
    marginHorizontal: normalize(5),
  },

  inputTileNew: {
    backgroundColor: Color.lightGreen,
    // width: "14%",
    fontFamily: Font.MontserratBold,
    padding: normalize(13),
    borderRadius: normalize(8),
    textAlign: "center",
    elevation: 1,
    marginHorizontal: normalize(5),
    borderWidth: 0,
    color: "black",
  },
});
