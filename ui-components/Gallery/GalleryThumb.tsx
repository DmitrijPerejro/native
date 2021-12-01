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
  const transformRefCurrent = React.useRef(new Animated.Value(10)).current;

  const rotateTo10 = () => {
    Animated.timing(transformRefCurrent, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotateTo0 = () => {
    Animated.timing(transformRefCurrent, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotate = transformRefCurrent.interpolate({
    inputRange: [0, 1],
    outputRange: ["10deg", "0deg"],
  });

  React.useEffect(() => {

    if (props.isActive) {
      rotateTo10();
    } else {
      rotateTo0();
    }
  }, [props.isActive]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.button, {
        transform: [
          {
            rotateZ: rotate,
          },
        ],
      }]}
      onPress={props.onPress}
    >
      <Image
        source={{
          uri: props.uri,
        }}
        style={[
          styles.image,
          {
            borderRadius: 15,
            borderColor: "black",
            borderWidth: 5,
            width: props.thumbSize,
            height: props.thumbSize,
          },
          props.isActive ? {
            borderColor: "red",
          } : null,
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {},
  button: {

  },
});

Elem.displayName = _kDisplayName;

const GalleryThumb = React.memo(Elem);
export default GalleryThumb;
