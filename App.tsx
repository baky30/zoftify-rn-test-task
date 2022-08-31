import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./src/navigation/MainStack";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <SafeAreaView className={"flex-1 bg-white"} edges={["top"]}>
              <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
              <MainStack />
            </SafeAreaView>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
