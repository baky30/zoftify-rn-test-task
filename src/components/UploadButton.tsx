import React from "react";
import { Image, TouchableOpacity } from "react-native";

interface IUploadButton {
  onUpload: () => void;
  required?: boolean;
}

const UploadButton: React.FC<IUploadButton> = ({ onUpload, required }) => {
  return (
    <TouchableOpacity
      className={`p-6 bg-gray rounded-lg ${required && "border border-red"}`}
      onPress={onUpload}>
      <Image
        source={require("../assets/icons/UploadIcon.png")}
        resizeMode={"contain"}
        className={"w-8 h-8"}
      />
    </TouchableOpacity>
  );
};

export default UploadButton;
