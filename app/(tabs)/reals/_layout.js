import { Stack } from "expo-router";
import { Text } from "react-native";
import { colors } from "../../../assets/styles/Theme";

export default function Layout() {
  return <Stack screenOptions={{ 
    headerShown : false,
    headerLargeTitle: false,
    headerTransparent: true,
    headerTitleStyle: { color: colors.text },
  }} />;
}