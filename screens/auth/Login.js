import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { normalize, reSize } from "../../services";
import InputField from "../../components/InputField";
import ButtonCustom from "../../components/ButtonCustom";
import { ShowToast } from "../../services/toastConfig";
import { getProfile, postLogin } from "../../requests/auth";
import Loader from "../../components/Loader";
import { authActions } from "../../store/reducers/authSlice";
import { useDispatch } from "react-redux";
import { userRoles } from "../../constants/users";

import Constant from "../../constants";

const { Color, Font } = Constant;

const Login = (props) => {
  const { role } = props.route.params;
  const dispatch = useDispatch();

  const [phone, setPhone] = useState("");
  const [loader, setLoader] = useState(false);
  const [password, setPassword] = useState("");
  const [agentCode, setAgentCode] = useState("");

  const authenticate = async () => {
    if (!phone || !password) {
      ShowToast.error("Please provide necessary information");
      return;
    }

    setLoader(true);
    postLogin({ phone, password })
      .then((res) => {
        if (res.data.code === 401) {
          ShowToast.error(res.data.message);
          if (res.data.message.search("verify") != "-1") {
            props.navigation.navigate("VerifyAccount", { fromLogin: true });
          }
        } else if (res.data.code === 200) {
          ShowToast.success("Login Successful");
          dispatch(authActions.setToken(res.data.data));
          dispatch(authActions.setRole(role))
          
          getProfile()
            .then(res => {
              dispatch(authActions.setUser(res.data.data))
              dispatch(authActions.login());
            })
            .catch(err => {
              console.warn(err.response)
              dispatch(authActions.logout())
              ShowToast.error('Something went wrong');
            })
        }

      })
      .catch((err) => {
        console.warn(err);
        ShowToast.error("Network Error");
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <Layout {...props}>
      {loader && <Loader visible={loader} />}
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <TouchableWithoutFeedback
            style={{ flex: 1 }}
            onPress={Keyboard.dismiss}
          >
            <View style={{ style: 1 }}>
              <View>
                <Text style={styles.signUpText}>Login</Text>
              </View>
              <View style={styles.signUpForm}>
                {role == userRoles.agent ? (
                  <InputField
                    title="Agent Code"
                    value={[agentCode, setAgentCode]}
                    number
                  />
                ) : (
                  <InputField
                    title="Phone Number"
                    value={[phone, setPhone]}
                    number
                  />
                )}

                <InputField
                  title="Password"
                  value={[password, setPassword]}
                  secureTextEntry
                />
              </View>
              <View style={styles.button}>
                <ButtonCustom title="Procced" onPress={authenticate} />
              </View>
              <TouchableOpacity
                style={styles.forgetPasswordContainer}
                onPress={() => props.navigation.navigate("ResetPassword")}
              >
                <Text style={styles.forgetPassword}>Forgot Password ?</Text>
              </TouchableOpacity>

              {role == userRoles.agent && (
                <View style={[styles.becomeAgent]}>
                  <ButtonCustom
                    title="Become An Agent"
                    onPress={authenticate}
                  />
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </Layout>
  );
};

export default Login;

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
    letterSpacing: 1,
  },

  signUpForm: {
    marginTop: normalize(10),
  },
  button: {
    marginTop: normalize(30),
    width: "60%",
  },
  forgetPassword: {
    letterSpacing: 0.2,
    fontFamily: Font.MontserratSemiBoldItalic,
    color: Color.darkGreen,
  },
  forgetPasswordContainer: {
    paddingTop: normalize(20),
    paddingLeft: normalize(5),
  },
  becomeAgent: {
    marginTop: "30%",
    marginBottom: normalize(30),
    paddingHorizontal: "5%",
  },
});
