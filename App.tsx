import React from "react";
import { StyleSheet, View, Text } from "react-native";
import UIText from "./ui-components/UIText";
import UICameraPicker from "./ui-components/UICameraPicker";

const _kDisplayName = "App";

export interface AppProps { }

interface IText {
  title: string;
  num: number;
}

const App: React.FC<AppProps> = (props) => {
  const [text, setText] = React.useState<IText>({
    title: "title2221",
    num: 1,
  });

  // React.useEffect(() => {
  //   setInterval(() => {
  //     setText((text) => ({
  //       title: text.title,
  //       num: text.num + 1,
  //     }));
  //   }, 1000);
  // }, []);

  React.useEffect(() => {
    console.log(text);
  }, [text.num]);

  return (
    <View style={styles.container}>
      <UIText style={styles.text}>
        {text.title}
      </UIText>
      <UICameraPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

App.displayName = _kDisplayName;

export default App;
