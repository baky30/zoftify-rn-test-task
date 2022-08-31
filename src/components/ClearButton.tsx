import React from "react";
import { Image, TouchableOpacity } from "react-native";

const ClearButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className={"absolute right-0"}>
      <Image
        source={require("../assets/icons/ClearIcon.png")}
        resizeMode={"contain"}
        className={"w-6 h-6"}
      />
    </TouchableOpacity>
  );
};

export default ClearButton;
