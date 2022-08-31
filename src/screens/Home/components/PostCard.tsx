import React from "react";
import { Image, View } from "react-native";
import { IPost } from "../../../commonInterfaces";
import Status from "../../../components/Status";
import StyledText from "../../../components/StyledText";
import moment from "moment";

const PostCard: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <View className={"flex-1 mt-3 p-4 bg-white"}>
      <View className={"flex-1 mb-4 flex-row"}>
        <Image
          source={{ uri: post.img_source }}
          resizeMode={"cover"}
          className={"w-32 h-32 rounded-xl"}
        />
        <View className={"flex-1 ml-4 items-start"}>
          <StyledText
            numberOfLines={1}
            style={"text-xl text-black font-medium"}>
            {post.title}
          </StyledText>
          <StyledText style={"text-xs text-gray-dark my-3"}>
            Created at:{" "}
            <StyledText style={"text-sm text-black"}>
              {moment(post.createdAt).format("DD/MM/YYYY hh:mm a")}
            </StyledText>
          </StyledText>
          <Status type={post.status} />
        </View>
      </View>
      <StyledText numberOfLines={2} style={"text-sm text-black"}>
        {post.description}
      </StyledText>
    </View>
  );
};

export default PostCard;
