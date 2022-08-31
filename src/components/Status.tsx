import React from "react";
import StyledText from "./StyledText";
import { TStatus } from "../commonInterfaces";
import { View } from "react-native";

const Status: React.FC<{ type: TStatus }> = ({ type }) => {
  const statusColor = type === "draft" ? "red" : "green";
  return (
    <View className={`px-3 py-2 rounded-lg bg-${statusColor}-light`}>
      <StyledText style={`text-sm capitalize text-${statusColor}`}>
        {type}
      </StyledText>
    </View>
  );
};

export default Status;
