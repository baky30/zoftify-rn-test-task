import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import CreatePost from "../screens/CreatePost/CreatePost";
import HomeScreenHeader from "../components/HomeScreenHeader";
import CreatePostScreenHeader from "../components/CreatePostScreenHeader";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => <HomeScreenHeader /> }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{ header: props => <CreatePostScreenHeader {...props} /> }}
      />
    </Stack.Navigator>
  );
};
