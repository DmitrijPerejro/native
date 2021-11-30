import React from "react";
import { StyleSheet, Image, View } from "react-native";

const _kDisplayName = "GallerySlide";

export interface GallerySlideProps {
  width: number,
  height: number,
  uri: string;
}

const Elem: React.FC<GallerySlideProps> = (props) => {
  console.log(props);

  return (
    <View>
      <Image
        source={{
          uri: props.uri,
        }}
        width={props.width}
        height={props.height}
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: "#000",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
});

Elem.displayName = _kDisplayName;

const GallerySlide = React.memo(Elem);
export default GallerySlide;
