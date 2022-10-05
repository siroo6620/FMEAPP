import { authSelectors, authActions } from "../../store/reducers/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { getLogout } from "../../requests/auth";
import { ShowToast } from "../../services/toastConfig";
import Buttons, { ButtonWhite } from "../../components/home/Buttons.components";

const MapStack = () => {
  const authUser = useSelector(authSelectors.selectAuth);
  const dispatch = useDispatch();

  // Sample code for logout functionality
  useEffect(() => {
    getLogout()
      .then((res) => {
        if (res.data.success) {
          dispatch(authActions.logout());
          ShowToast.success("Logout Successful");
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  }, []);

  return (
    <View>
      <View>
        <Buttons type="rounded" title="Map Stack" variant={1} />
        <Buttons type="rounded" title="Proceed" variant={3} />
        <Buttons type="rounded" title="Proceed" variant={2} />
        <Buttons type="rounded" title="Proceed" variant={4} />
        <Buttons type="nonrounded" title="Proceed" extendedPadding="normal" />
        <Buttons
          type="nonrounded"
          title="Hire"
          headerBtn={true}
          extendedPadding="large"
        />
        <Buttons
          type="nonrounded"
          title="Edit"
          extendedPadding="normal"
          icon={true}
        />
      </View>
    </View>
  );
};

export default MapStack;

const styles = StyleSheet.create({});
