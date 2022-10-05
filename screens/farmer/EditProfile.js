import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HomeLayout from "./HomeLayout";
import Buttons from "../../components/home/Buttons.components";
import InputField from "../../components/InputField";
import SelectDropdown from "react-native-select-dropdown";
import fonts from "../../constants/fonts";
import { farmerColor } from "../../constants/colors";
import { normalize } from "../../services";
import Icon from "react-native-vector-icons/Ionicons";

const EditProfile = (props) => {
  const [email, setEmail] = useState("");
  const [farmName, setFarmName] = useState("");
  const [location, setLocation] = useState("");
  return (
    <HomeLayout {...props} backIconAlt={true} settings={true}>
      <View style={{ marginVertical: normalize(50) }}>
        <InputField
          colorAlt={true}
          title="Email Address"
          value={[email, setEmail]}
        />

        <View>
          <Text style={styles.inputFontSize}>Location</Text>
          <SelectDropdown
            data={["hello", "hellow"]}
            onSelect={(selectedItem, index) => {
              setLocation(selectedItem);
            }}
            defaultButtonText=" "
            defaultValueByIndex={0}
            dropdownStyle={{
              borderRadius: normalize(10),
              paddingHorizontal: normalize(10),
            }}
            rowStyle={{
              paddingHorizontal: normalize(10),
              width: "100%",
            }}
            rowTextStyle={{
              textAlign: "left",
              fontFamily: fonts.MontserratSemiBold,
              color: farmerColor.tabBarIconColor,
            }}
            buttonStyle={{
              width: "100%",
              fontFamily: fonts.MontserratSemiBold,
              marginVertical: normalize(10),
              backgroundColor: farmerColor.white,
            }}
            buttonTextStyle={{
              textAlign: "left",
              fontFamily: fonts.MontserratSemiBold,
              fontSize: normalize(16),
              padding: normalize(1),
            }}
            renderDropdownIcon={(isOpened) => {
              return (
                <Icon
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={farmerColor.tabBarIconColor}
                  size={normalize(18)}
                />
              );
            }}
          />
        </View>

        <InputField
          colorAlt={true}
          title="Farm Name"
          value={[farmName, setFarmName]}
        />
      </View>
      <View style={{ marginVertical: normalize(30) }}>
        <Buttons type="nonrounded" title="Update" extendedPadding="normal" />
      </View>
    </HomeLayout>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  inputFontSize: {
    fontFamily: fonts.MontserratSemiBold,
    fontSize: normalize(16),
    marginVertical: normalize(8),
    color: farmerColor.tabBarIconSelectedColor,
  },
});
