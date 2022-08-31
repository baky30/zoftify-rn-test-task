import React from "react";
import { TextInput } from "react-native";

interface IStyledInput {
  style?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  numberOfLines?: number;
  multiline?: boolean;
  textAlignVertical?: "auto" | "center" | "top" | "bottom";
  placeholderTextColor?: string;
}

const StyledInput: React.FC<IStyledInput> = ({
  style,
  value,
  onChangeText,
  placeholder,
  numberOfLines,
  multiline,
  textAlignVertical,
  placeholderTextColor,
}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      numberOfLines={numberOfLines}
      multiline={multiline}
      textAlignVertical={textAlignVertical}
      className={`rounded-lg px-3 h-[58px] bg-gray-light text-base text-black font-lato ${style}`}
    />
  );
};

export default StyledInput;
