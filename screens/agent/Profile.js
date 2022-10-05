import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { normalize } from "../../services";
import AppBar from "../../components/home/AppBar";
import colors, { farmerColor } from "../../constants/colors";
import fonts from "../../constants/fonts";
import CustomButtons from "../../components/home/CustomButtons";
import Buttons from "../../components/home/Buttons.components";

const Profile = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <AppBar
          greenBg={true}
          {...props}
          text="Your Profile"
          removeBack={true}
          wallet={true}
        />
      </View>
      <View style={styles.banner}></View>
      <View style={styles.image}>
        <Image
          style={styles.imageBanner}
          source={require("../../assets/app/110.png")}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.horizontalLine}>
          <Text style={styles.name}>Joel Goni D.</Text>
          <Text style={styles.title}>FARMER</Text>
        </View>
        <View style={{ marginTop: normalize(20) }}>
          <Text style={styles.key}>Email Address</Text>
          <Text style={styles.value}>joesthergonitiu@village.com</Text>
        </View>
        <View style={{ marginTop: normalize(20) }}>
          <Text style={styles.key}>Farm Name</Text>
          <Text style={styles.value}>CHICKEN OF THUNDER FARMS</Text>
        </View>
        <View style={{ marginTop: normalize(20) }}>
          <Text style={styles.key}>Crop Type</Text>
          <Text style={styles.value}>CORN(Maize)</Text>
        </View>
        <View style={{ marginTop: normalize(20) }}>
          <Text style={styles.key}>Location</Text>
          <Text style={styles.value}>Dar es Salaam</Text>
        </View>
        <View style={{ marginTop: normalize(20) }}>
          <Buttons
            type="nonrounded"
            title="Edit"
            extendedPadding="normal"
            icon={true}
            onClick={() => {
              props.navigation.navigate("EditProfile");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: farmerColor.backgroundColor,
  },
  container: {
    backgroundColor: "#fff",
    marginTop: normalize(20),
    marginHorizontal: normalize(20),
  },
  banner: {
    width: "100%",
    height: normalize(100),
    backgroundColor: farmerColor.teal,
    marginVertical: normalize(10),
  },
  image: {
    backgroundColor: farmerColor.backgroundColor,
    marginHorizontal: normalize(20),
    width: normalize(100),
    // position: "absolute",
    // top: "45%",
    borderRadius: normalize(8),
    borderWidth: 4,
    borderColor: farmerColor.white,
    elevation: 10,
    marginTop: -normalize(60),
  },
  imageBanner: {
    height: normalize(90),
    width: undefined,
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: normalize(10),
    padding: normalize(20),
  },
  content: {
    marginTop: normalize(10),
    marginHorizontal: normalize(20),
  },
  horizontalLine: {
    borderBottomColor: farmerColor.tabBarIconColor,
    borderBottomWidth: 1,
    paddingVertical: normalize(10),
    marginVertical: normalize(10),
  },
  name: {
    fontFamily: fonts.MontserratExtraBold,
    color: farmerColor.tabBarIconColor,
    fontSize: normalize(25),
  },
  title: {
    fontFamily: fonts.MontserratExtraBold,
    color: farmerColor.tabBarIconColor,
    fontSize: normalize(15),
  },
  key: {
    fontFamily: fonts.MontserratSemiBold,
    color: farmerColor.tabBarIconSelectedColor,
    fontSize: normalize(14),
  },
  value: {
    fontFamily: fonts.MontserratSemiBold,
    color: farmerColor.tabBarIconColor,
    fontSize: normalize(16),
  },
});
