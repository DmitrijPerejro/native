import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";

const _kDisplayName = "GalleryThumb";
export interface GalleryThumbProps {
  uri: string;
  onPress: () => void;
  isActive: boolean;
  thumbSize: number;
}

const Elem: React.FC<GalleryThumbProps> = (props) => (
  <TouchableOpacity
    activeOpacity={0.9}
    style={[styles.button, props.isActive ? { borderColor: "red" } : null]}
    onPress={props.onPress}
  >
    <Image
      source={{
        uri: props.uri,
      }}
      style={[
        styles.image,
        {
          width: props.thumbSize,
          height: props.thumbSize,
          borderRadius: 20,
        },
        props.isActive ? { borderColor: "red" } : null]}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {},
  image: {
    borderWidth: 2,
    borderColor: "transparent",
    borderStyle: "solid",
    backgroundColor: "#000",
    borderRadius: 20,
  },
  button: {},
});

Elem.displayName = _kDisplayName;

const GalleryThumb = React.memo(Elem);
export default GalleryThumb;
