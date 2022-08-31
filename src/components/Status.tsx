import React from "react";
import StyledText from "./StyledText";
import { TStatus } from "../commonInterfaces";
import { View } from "react-native";

const Status: React.FC<{ type: TStatus }> = ({ type }) => {
  const backgroundColor = type === "draft" ? "#FCE8E8" : "#E8F9EB";
  const txtColor = type === "draft" ? "#D91616" : "#10C137";

  return (
    <View className={"px-3 py-2 rounded-lg"} style={{ backgroundColor }}>
      <StyledText style={"text-sm capitalize"} color={txtColor}>
        {type}
      </StyledText>
    </View>
  );
};

export default Status;
