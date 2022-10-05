import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React from "react";
import AppBar from "../../components/home/AppBar";
import { normalize } from "../../services";
import { farmerColor } from "../../constants/colors";
import InputField from "../../components/InputField";
import fonts from "../../constants/fonts";
import Buttons from "../../components/home/Buttons.components";

const LandMeasurement = (props) => {
  return (
    <View
      style={{
        position: "relative",
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <Image
        style={{ position: "absolute" }}
        resizeMode="cover"
        source={require("../../assets/splashscreen.png")}
      />
      <View style={styles.container}>
        <AppBar
          showIcon={false}
          showNotif={true}
          backIconAlt={true}
          image={true}
          {...props}
        />
      </View>
      <View
        style={{
          height: "35%",
          backgroundColor: farmerColor.bgBlue,
          borderTopLeftRadius: normalize(40),
          borderTopRightRadius: normalize(40),
          padding: normalize(25),
          elevation: 10,
        }}
      >
        <TextInput
          style={{
            backgroundColor: farmerColor.white,
            paddingVertical: normalize(10),
            paddingHorizontal: normalize(25),
            borderRadius: normalize(10),
            fontFamily: fonts.MontserratSemiBold,
          }}
          placeholder="Type in the name of your farm..."
          placeholderTextColor={farmerColor.starEmptyColor}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: normalize(10),
          }}
        >
          <Buttons
            type="nonrounded"
            title="Generate Farm Size"
            extendedPadding="normal"
          />
          <Buttons
            type="nonrounded"
            title="My Farms"
            extendedPadding="normal"
            onClick={() => {
              props.navigation.navigate("FarmList");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default LandMeasurement;

const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(20),
    paddingHorizontal: normalize(20),
    justifyContent: "space-between",
    flexGrow: 1,
  },
});
