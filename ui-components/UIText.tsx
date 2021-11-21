import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

const _kDisplayName = "UIText";

export interface UITextProps extends TextProps { }

const UIText: React.FC<UITextProps> = (props) => {
  const { style, ...other } = props;

  return (
    <Text
      {...other}
      style={[style, styles.container]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
  },
  view: {},
});

const getStyles = () => styles;

UIText.displayName = _kDisplayName;

export default UIText;
