import Light from "./Light"
import Dark from "./Dark"

import { StyleSheet } from "react-native";

var theme = Light;

export const setTheme = (newTheme) => {
    theme = newTheme;
}

export const colors = theme.colors;

export const styles = StyleSheet.create(theme.styles);