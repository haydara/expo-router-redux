import { Tabs } from "expo-router";
import { ImageBackground, Text } from "react-native";
import { colors, styles } from "@Assets/styles/Theme";
import { FontAwesome5 } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        //tabBarBackground: () => <ImageBackground source={require('@Assets/images/tab-bg.png')}  resizeMode="cover" style={{ height: 70 }} />,
        tabBarLabelStyle: {display: "none" },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.darkText,        
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              size={22}
              style={{ marginBottom: -3 }}
              name="home"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="reals"
        options={{
          title: "Reals",
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              size={22}
              style={{ marginBottom: -3 }}
              name="play"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "",
          tabBarIcon: () => <FontAwesome5 name="plus" size={18} color="#FFFFFF" style={{position: "absolute"}} />,
          tabBarItemStyle: styles.addButton,
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            console.log("Add new post");
          },
        })}
      />
      <Tabs.Screen
        name="empty"
        options={{
          title: "",
          tabBarIcon: () => <Text></Text>,
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
          },
        })}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              size={22}
              style={{ marginBottom: -3 }}
              name="user-friends"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              size={22}
              style={{ marginBottom: -3 }}
              name="cogs"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
