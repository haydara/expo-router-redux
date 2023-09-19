import { Stack } from "expo-router";
import { Text, Image } from "react-native";
import ToolbarRightWidget from "../../../src/widgets/ToolbarRightWidget";

export default function Layout() {
  return (
    <Stack screenOptions={{ 
      headerShown: true,
      headerRight: () => <ToolbarRightWidget />,
      headerLeft: () => <Image source={require('@Assets/images/logo-reverse.png')} style={{width: 40, height: 30, marginRight: 20}} />
    }}>
      <Stack.Screen
        name="new-entry-modal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
