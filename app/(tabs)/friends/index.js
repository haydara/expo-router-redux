import { Link, Redirect, Stack } from "expo-router";
import { View } from "react-native";

const Tab2Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerShown: true, title: "Friends" }} />
      <Link href="/home/details">Go to Details</Link>
      <Link href="/home/new-entry-modal">Present modal</Link>
    </View>
  );
};
export default Tab2Index;
