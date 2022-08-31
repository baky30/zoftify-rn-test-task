import React from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import PostCard from "./components/PostCard";
import Button from "../../components/Button";
import { useAppSelector } from "../../redux/hooks";

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const posts = useAppSelector(state => state.posts);

  return (
    <View className={"flex-1 justify-between bg-gray-light"}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={item => `${item.createdAt}`}
      />
      <Button
        value={"New Post"}
        onPress={() => navigation.navigate("CreatePost")}
      />
    </View>
  );
};

export default Home;
