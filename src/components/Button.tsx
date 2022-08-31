import React from "react";
import { TouchableOpacity } from "react-native";
import StyledText from "./StyledText";

interface IButton {
  value: string;
  onPress: () => any;
}

const Button: React.FC<IButton> = ({ value, onPress }) => {
  return (
    <TouchableOpacity
      className={"rounded-lg mb-20 mx-4 mt-3 items-center py-3 bg-blue"}
      onPress={onPress}>
      <StyledText style={"text-base"} color={"white"}>
        {value}
      </StyledText>
    </TouchableOpacity>
  );
};

export default Button;
