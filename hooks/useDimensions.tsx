import React from "react";
import { Dimensions } from "react-native";

interface useDimesionsResult {
  width: number;
  height: number;
}

export const useDimensions = (type: "window" | "screen" = "screen"): useDimesionsResult => {
  const [width, setWidth] = React.useState(Dimensions.get(type).width);
  const [height, setheight] = React.useState(Dimensions.get(type).height);

  React.useEffect(() => {
    setWidth(Dimensions.get(type).width);
    setheight(Dimensions.get(type).height);
  }, [Dimensions]);

  return {
    width,
    height,
  };
};
