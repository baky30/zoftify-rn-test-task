import React, { Dispatch, SetStateAction } from "react";
import { Image, View } from "react-native";
import StyledText from "../../../components/StyledText";
import UploadButton from "../../../components/UploadButton";
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from "react-native-image-picker";
import ClearButton from "../../../components/ClearButton";

interface IUploadPhotoForm {
  imgUri: string;
  setImgUri: Dispatch<SetStateAction<string>>;
  required?: boolean;
}

const UploadPhotoForm: React.FC<IUploadPhotoForm> = ({
  imgUri,
  setImgUri,
  required,
}) => {
  const onUpload = async () => {
    const options: ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: "photo",
    };
    const result = await launchImageLibrary(options);
    const uri = result.assets && result.assets[0]?.uri;
    if (uri) {
      setImgUri(uri);
    }
  };

  return (
    <View className={"bg-white mt-3 p-4 pb-5 items-start"}>
      <StyledText style={"text-lg text-black mb-[18px]"}>Photo</StyledText>
      {imgUri ? (
        <View>
          <Image
            source={{ uri: imgUri }}
            resizeMode={"cover"}
            className={"w-20 h-20 rounded-xl"}
          />
          <ClearButton onPress={() => setImgUri("")} />
        </View>
      ) : (
        <UploadButton required={required} onUpload={onUpload} />
      )}
    </View>
  );
};

export default UploadPhotoForm;
