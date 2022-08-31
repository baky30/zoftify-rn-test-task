import React from "react";
import { Image, View } from "react-native";

const HomeScreenHeader = () => {
  return (
    <View className={"items-center py-3.5 bg-white"}>
      <Image
        source={require("../assets/icons/Logo.png")}
        resizeMode={"contain"}
        className={"w-6 h-6"}
      />
    </View>
  );
};

export default HomeScreenHeader;
