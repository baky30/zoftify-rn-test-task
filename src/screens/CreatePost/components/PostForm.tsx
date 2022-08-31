import React, { Dispatch, SetStateAction } from "react";
import StyledInput from "../../../components/StyledInput";
import Dropdown from "../../../components/Dropdown";
import { View } from "react-native";
import { TStatus } from "../../../commonInterfaces";

interface IPostForm {
  title: string;
  description: string;
  status: TStatus | "";
  setTitle: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<TStatus | "">>;
  setDescription: Dispatch<SetStateAction<string>>;
  errorMessage: string;
}

const PostForm: React.FC<IPostForm> = ({
  title,
  status,
  setTitle,
  setStatus,
  description,
  setDescription,
  errorMessage,
}) => {
  const errorStyles = "border border-red text-red";
  const placeholderColor = errorMessage ? "#D91616" : "#8A8C90";
  const dropdownErrorStyles = errorMessage && !status && "border border-red";

  return (
    <View className={"bg-white px-4 py-5"}>
      <StyledInput
        placeholder={errorMessage ? errorMessage : "Title"}
        placeholderTextColor={placeholderColor}
        style={errorMessage && !title ? errorStyles : ""}
        value={title}
        onChangeText={setTitle}
      />
      <View className={`mt-2 rounded-lg ${dropdownErrorStyles}`}>
        <Dropdown status={status} onSelect={setStatus} />
      </View>
      <StyledInput
        style={`mt-3 h-[116px] text-start ${
          errorMessage && !description ? errorStyles : ""
        }`}
        value={description}
        onChangeText={setDescription}
        placeholder={errorMessage ? errorMessage : "Description"}
        placeholderTextColor={placeholderColor}
        textAlignVertical={"top"}
        numberOfLines={3}
        multiline
      />
    </View>
  );
};

export default PostForm;
