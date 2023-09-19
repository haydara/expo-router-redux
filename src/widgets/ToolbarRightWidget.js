import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { colors, styles } from "../../assets/styles/Theme";
import { useRouter } from "expo-router";


const ToolbarRightWidget = () => {
    const router = useRouter();

    return (
       <View style={styles.toolbarRightWidget}>
            <Pressable onPress={() => router.push("(tabs)/home/search")}>
                <FontAwesome5 name="search" size={18} color={colors.text} />
            </Pressable>
            <Pressable onPress={() => router.push("(tabs)/home/notifications")}>
                <FontAwesome5 name="bell" size={18} color={colors.text} />
            </Pressable>
            <Pressable onPress={() =>  router.push("(tabs)/home/messages")}>
                <FontAwesome5 name="comment" size={18} color={colors.text} />
            </Pressable>
       </View>
    );
};

export default ToolbarRightWidget;