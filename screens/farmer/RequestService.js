import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HomeLayout from "../farmer/HomeLayout";
import { normalize } from "../../services";
import colors from "../../constants/colors";
import CustomButtons from "../../components/home/CustomButtons";
import fonts from "../../constants/fonts";
import Buttons from "../../components/home/Buttons.components";

const RequestService = (props) => {
  const { route, navigation } = props;
  const data = route.params;
  return (
    <HomeLayout backIconAlt={true} showNotif={true} {...props}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginHorizontal: "auto",
          marginVertical: normalize(150),
        }}
      >
        <Image
          resizeMode="contain"
          style={styles.imageTileHomePage2}
          source={require("../../assets/app/FME-Img2.png")}
        />
        <View style={{ width: "60%", marginTop: normalize(20) }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: fonts.MontserratSemiBold,
              color: colors.textGreenButton,
              fontSize: normalize(14),
            }}
          >
            Thanks,
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: fonts.MontserratSemiBold,
              color: colors.textGreenButton,
              fontSize: normalize(14),
            }}
          >
            You have requested for the Tractor Service, you will be contacted
            shortly.
          </Text>
          <View
            style={{
              marginVertical: normalize(30),
              alignItems: "center",
              width: "100%",
            }}
          >
            <Buttons
              type="nonrounded"
              title="Proceed"
              extendedPadding="large"
              onClick={() => {
                props.navigation.navigate("RequestConfirmation");
              }}
            />
          </View>
        </View>
      </View>
    </HomeLayout>
  );
};

export default RequestService;

const styles = StyleSheet.create({
  imageTileHomePage2: {
    height: undefined,
    width: normalize(80),
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: normalize(10),
  },
});
