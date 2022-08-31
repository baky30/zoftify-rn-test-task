import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import StyledText from "./StyledText";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const CreatePostScreenHeader: React.FC<NativeStackHeaderProps> = ({
  navigation,
}) => {
  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <View className={"items-center bg-white py-3.5"}>
      <TouchableOpacity
        className={"absolute top-[50%] left-5 "}
        onPress={goBackHandler}>
        <Image
          source={require("../assets/icons/LeftArrow.png")}
          resizeMode={"contain"}
          className={"w-7 h-7"}
        />
      </TouchableOpacity>
      <StyledText style={"text-xl text-black"}>Create new post</StyledText>
    </View>
  );
};

export default CreatePostScreenHeader;
