import React, { useState, FC } from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import PostForm from "./components/PostForm";
import UploadPhotoForm from "./components/UploadPhotoForm";
import { useAppDispatch } from "../../redux/hooks";
import { IPost, TStatus } from "../../commonInterfaces";
import { createPost } from "../../redux/reducers/postsReducer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const CreatePost: FC<{ navigation: NativeStackNavigationProp<any> }> = ({
  navigation,
}) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<TStatus | "">("");
  const [description, setDescription] = useState("");
  const [imgUri, setImgUri] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    if (!title || !status || !description || !imgUri) {
      setErrorMessage("This field is required!");
      return;
    }

    const post: IPost = {
      title,
      status,
      description,
      img_source: imgUri,
      createdAt: new Date().getTime(),
    };

    dispatch(createPost(post));
    navigation.goBack();
  };

  return (
    <View className={"flex-1 bg-gray-light justify-between"}>
      <View className={"flex-1 pt-2"}>
        <PostForm
          title={title}
          status={status}
          description={description}
          setTitle={setTitle}
          setStatus={setStatus}
          setDescription={setDescription}
          errorMessage={errorMessage}
        />
        <UploadPhotoForm
          imgUri={imgUri}
          setImgUri={setImgUri}
          required={!!errorMessage && !imgUri}
        />
      </View>
      <Button value={"Submit"} onPress={onSubmit} />
    </View>
  );
};

export default CreatePost;
