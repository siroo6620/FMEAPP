import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import colors, { farmerColor } from "../../constants/colors";
import fonts from "../../constants/fonts";
import HomeLayout from "./HomeLayout";
import { normalize } from "../../services";
import CustomButtons from "../../components/home/CustomButtons";

const Feedback = (props) => {
  const [count, setCount] = useState(0);
  const [feedback, setfeedback] = useState("");
  const [starRating, setStarRating] = useState(0);

  const handleChange = (text) => {
    setfeedback(text);
    setCount(text.nativeEvent.text.length);
  };

  const starIcon = (
    <Icon
      style={{ margin: normalize(10), color: farmerColor.starEmptyColor }}
      name="star-outline"
      size={normalize(30)}
    />
  );
  const starIconGold = (
    <Icon
      style={{ margin: normalize(10), color: farmerColor.starFilledColor }}
      name="star"
      size={normalize(30)}
    />
  );

  return (
    <HomeLayout showIcon={false} {...props}>
      <View style={{ marginVertical: normalize(15) }}>
        <Text
          style={{
            fontFamily: fonts.MontserratBold,
            textAlign: "center",
            color: farmerColor.tabBarIconColor,
            marginTop: normalize(5),
            fontSize: normalize(20),
          }}
        >
          Feedback
        </Text>
      </View>
      <View>
        <TextInput
          multiline={true}
          numberOfLines={12}
          onChange={handleChange}
          placeholder="Type to us..."
          value={feedback}
          maxLength={240}
          style={{
            alignItems: "flex-start",
            padding: normalize(10),
            backgroundColor: farmerColor.white,
            borderRadius: normalize(10),
            textAlignVertical: "top",
            fontFamily: fonts.MontserratMedium,
            fontSize: normalize(18),
          }}
          placeholderTextColor={farmerColor.tabBarIconSelectedColor}
        />
        <Text
          style={{
            fontFamily: fonts.MontserratMedium,
            textAlign: "right",
            color: farmerColor.tabBarIconSelectedColor,
            marginTop: normalize(5),
          }}
        >
          {count}/240 words
        </Text>
      </View>
      <View style={{ marginVertical: normalize(40) }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: normalize(18),
            fontFamily: fonts.MontserratBold,
            color: farmerColor.tabBarIconSelectedColor,
          }}
        >
          Rate App
        </Text>
        <View style={styles.starContainer}>
          {iconMaker(starIconGold, 4)}
          {iconMaker(starIconGold, 4)}
          {iconMaker(starIconGold, 4)}
          {iconMaker(starIconGold, 4)}
          {iconMaker(starIcon, 4)}
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <CustomButtons
          style={{ alignItems: "center" }}
          type="3"
          title="Submit"
        />
      </View>
    </HomeLayout>
  );
};
const iconMaker = (icon, setStarRating) => {
  return <TouchableOpacity onPress={() => {}}>{icon}</TouchableOpacity>;
};

export default Feedback;

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
