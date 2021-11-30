import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

const _kDisplayName = "Card";

export interface CardProps {
  url: string;
  name: string;
  width: number;
}

const Card: React.FC<CardProps> = (props) => (
  <View style={styles.container}>
    <ImageBackground
      source={{
        uri: props.url,
      }}
      style={{}}
    >
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, .5)",
          height: 400,
          width: props.width - 20,
        }}
      >
        <Text style={{
          fontWeight: "bold",
          color: "#fff",
          borderWidth: 2,
          textAlign: "center",
        }}>{props.name} -- name</Text>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 13,
    minWidth: 300,
  },
});

Card.displayName = _kDisplayName;

export default Card;
