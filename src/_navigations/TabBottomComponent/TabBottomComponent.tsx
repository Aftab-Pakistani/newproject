import styles from "./styles";
import { Icon, Typography } from "@molecules";
import { Colors, getHeight, getWidth } from "@ui";
import { View, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

function TabBottomComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.tabsContainer}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : "route.name";
        const isFocused = state.index === index;
        const onPress = () => {
          if (route.state) {
            if (route.state.routes.length)
              navigation.navigate(route.state.routes[0].name);
          } else navigation.navigate(route.name);
        };
        return (
          <Item
            length={state.routes.length}
            key={index.toString() + "sds"}
            route={route}
            isFocused={isFocused}
            label={label}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}

function Item({ route, isFocused, onPress, length }: any) {
  let _onPress = () => {
    onPress();
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      key={route.key}
      onPress={_onPress}
      style={[styles.tabItem, { width: getWidth() / length }]}
    >
      <Icon
        name={route.params.icon}
        stroke={isFocused ? Colors.primary_main : Colors.primary_light}
        width={getWidth(24)}
        height={getHeight(24)}
        style={styles.tabIcon}
      />
      <Typography
        style={styles.tabItemLbl}
        color={isFocused ? "primary_main" : "primary_light"}
      >
        {route.params.text}
      </Typography>
    </TouchableOpacity>
  );
}

export { TabBottomComponent };
