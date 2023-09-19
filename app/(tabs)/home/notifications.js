import { View, Text } from "react-native";
import { Stack, useNavigation, useRouter } from "expo-router";

export default function Notifications() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Notifications Screen" }} />
      <Text
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          if ( navigation.canGoBack() )
            navigation.goBack();
        }}
      >
        GO BACK
      </Text>
    </View>
  );
}
