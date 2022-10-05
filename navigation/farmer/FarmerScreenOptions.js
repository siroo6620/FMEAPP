import { StyleSheet, Text } from "react-native";
import { normalize } from "../../services";
import colors, { farmerColor } from "../../constants/colors";
import fonts from "../../constants/fonts";
import Icon from "react-native-vector-icons/Ionicons";

const FarmerScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === "HomeStack") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "MapStack") {
      iconName = focused ? "location" : "location-outline";
    } else if (route.name === "ServiceStack") {
      iconName = focused ? "navigate" : "navigate-outline";
    } else if (route.name === "ProfileStack") {
      iconName = focused ? "person" : "person-outline";
    }

    return (
      <Icon
        name={iconName}
        size={size}
        color={farmerColor.tabBarIconSelectedColor}
      />
    );
  },
  tabBarLabel: (focused, color, position) => {
    let textName;
    if (route.name === "HomeStack") {
      textName = "Home";
    } else if (route.name === "MapStack") {
      textName = "Map";
    } else if (route.name === "ServiceStack") {
      textName = "Services";
    } else if (route.name === "ProfileStack") {
      textName = "Profile";
    }
    return (
      <Text
        style={{
          color: farmerColor.tabBarIconColor,
          fontFamily: focused.focused
            ? fonts.MontserratBold
            : fonts.MontserratRegular,
          fontSize: normalize(13),
        }}
      >
        {textName}
      </Text>
    );
  },
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: normalize(20),
    elevation: 0,
    backgroundColor: farmerColor.white,
    left: normalize(20),
    right: normalize(20),
    height: normalize(70),
    borderRadius: normalize(10),

    ...styles.shadow,
  },
  tabBarItemStyle: { paddingVertical: normalize(10) },
  tabBarIconStyle: {},
});

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default FarmerScreenOptions;
