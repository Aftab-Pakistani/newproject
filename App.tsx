
import { View } from "react-native";
import NavigationApp from "@navigations";
import { queryClient } from '@query';
import { QueryClientProvider } from "@tanstack/react-query";

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <NavigationApp />
      </QueryClientProvider>
    </View>
  );
}
