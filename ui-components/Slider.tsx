/* eslint-disable react/jsx-no-bind */
import React from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import { useDimensions } from "../hooks/useDimensions";

const _kDisplayName = "SLider";

export interface SLiderProps {}

interface Q {
  key: string;
  text: string;
  bg: string;
}

const data: Q[] = [
  {
    key: "1",
    text: "1",
    bg: "rgb(0, 0, 0)",
  },
  {
    key: "2",
    text: "2",
    bg: "rgb(255, 0, 50)",
  },
  {
    key: "3",
    text: "3",
    bg: "rgb(255, 255, 255)",
  },
  {
    key: "4",
    text: "4",
    bg: "rgb(255, 0, 250)",
  },
  {
    key: "5",
    text: "5",
    bg: "rgb(255, 0, 200)",
  },
  {
    key: "6",
    text: "6",
    bg: "rgb(255, 0, 255)",
  },
];

const BackDrop = ({ scrollX }) => {
  const { width, height } = useDimensions();

  const bg = scrollX.interpolate({
    inputRange: data.map((_, i) => i * width),
    outputRange: data.map((item) => item.bg),
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: bg,
        },
      ]}
    />
  );
};

const Elem: React.FC<SLiderProps> = (props) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const { width, height } = useDimensions();

  return (
    <View style={styles.container}>
      <BackDrop scrollX={scrollX} />
      <Animated.FlatList
        pagingEnabled={true}
        data={data}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <View
            style={{
              width: width,
              height: height,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 50,
              }}
            >{item.text}</Text>
          </View>
        )}
        horizontal={false}
        onScroll={
          Animated.event(
            [ scrollX: nativeEvent { nativeEvent: { contentOffset: { y: scrollX } }}],
            { useNativeDriver: false },
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    height: 50,
  },
});

Elem.displayName = _kDisplayName;
const SLider = React.memo(Elem);

export default SLider;
