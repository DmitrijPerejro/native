import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import UIText from "./ui-components/UIText";
import UICameraPicker from "./ui-components/UICameraPicker";
import List from "./ui-components/List";
import Gallery from "./ui-components/Gallery/Gallery";
import Slider from "./ui-components/Slider";

const _kDisplayName = "App";

export interface AppProps { }

interface IText {
  title: string;
  num: number;
}

const App: React.FC<AppProps> = (props) => (
  <View style={styles.container}>
    <Slider />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

App.displayName = _kDisplayName;

export default App;
