import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Buttons from "../../components/home/Buttons.components";

const Map = () => {
  return (
    <View>
      <Buttons type="rounded" title="Map Stack" variant={1} />
      <Buttons type="rounded" title="Proceed" variant={3} />
      <Buttons type="rounded" title="Proceed" variant={2} />
      <Buttons type="rounded" title="Proceed" variant={4} />
      <Buttons type="nonrounded" title="Proceed" extendedPadding="large" />
      <Buttons type="nonrounded" title="Proceed" extendedPadding="large" />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
