import React from "react";
import { StyleSheet, Image, Animated, TouchableOpacity } from "react-native";

const _kDisplayName = "GalleryThumb";
export interface GalleryThumbProps {
  uri: string;
  onPress: () => void;
  isActive: boolean;
  thumbSize: number;
}

const Elem: React.FC<GalleryThumbProps> = (props) => {
  const color = React.useRef(new Animated.Value(0)).current;

  const colorToActive = () => {
    Animated.timing(color, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const colorToPrimary = () => {
    Animated.timing(color, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const colorr = color.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0, 0, 0, 0)", "rgb(0, 255, 0)"],
  });

  React.useEffect(() => {
    if (props.isActive) {
      colorToActive();
    } else {
      colorToPrimary();
    }

  }, [props.isActive]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.button]}
      onPress={props.onPress}
    >
      <Animated.Image
        source={{
          uri: props.uri,
        }}
        style={[
          styles.image,
          {
            borderRadius: 15,
            borderWidth: 2,
            borderColor: colorr,
            width: props.thumbSize,
            height: props.thumbSize,
            backgroundColor: colorr,
          },

        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {},
  button: {},
});

Elem.displayName = _kDisplayName;

const GalleryThumb = React.memo(Elem);
export default GalleryThumb;
