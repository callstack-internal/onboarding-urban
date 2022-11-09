import React from "react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Toast from "react-native-toast-message";
import { MainNavigator } from "./src/navigators/MainNavigator";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: () => {
      Toast.show({
        type: "error",
        text1: "🤢 An error occured 🤕",
        text2: `The unexpected error happened! But we'll take care of it 💪🏻`,
      });
    },
  }),
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigator />
      <Toast />
    </QueryClientProvider>
  );
};

export default App;
