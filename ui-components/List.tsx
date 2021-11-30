/* eslint-disable react/jsx-no-bind */
import React from "react";
import { StyleSheet, View, Text, FlatList, TouchableHighlight } from "react-native";
import Card from "./Card";
import { useDimensions } from "../hooks/useDimensions";

const _kDisplayName = "List";

export interface ListProps {}

const List: React.FC<ListProps> = (props) => {
  const [data, setData] = React.useState([]);
  const ref = React.useRef<FlatList>();
  const [selected, setSelected] = React.useState([]);
  const attempScroll = React.useRef(0);
  const { width, height } = useDimensions();

  console.log("123");
  console.log(width, height);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     ref.current.scrollToIndex({
  //       animated: true,
  //       index: 1,
  //     });
  //   }, 1000);
  // }, []);

  React.useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    console.log("getList FUNCTION");

    if (attempScroll.current > 1) {
      return;
    }
    
    try {
      attempScroll.current = attempScroll.current + 1;
      console.log("get list");
      const api = await fetch("http://192.168.0.137:3333/members");
      const json = await api.json();
      setData((data) => [...data, ...json.members  ]);

    } catch (err) {
      console.log(err);
    }
  };

  const onPress = React.useCallback((item) => () => {
    console.log(selected);

    setSelected((prev) => [...prev, item.id]);
  }, []);

  const render = React.useCallback(({ item, i, separators  }) => (
    <TouchableHighlight
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
      onPress={onPress(item)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <Card
        name={i}
        url={item.url}
        width={width}
      />
    </TouchableHighlight>
  ), []);

  return (
    <View style={styles.container}>
      <FlatList
        disableIntervalMomentum={true}
        ref={ref}
        horizontal={true}
        ItemSeparatorComponent={(props) => (
          <React.Fragment>
            <View style={{width: 10}} />
          </React.Fragment>
        )}
        // ListHeaderComponent={
        //   <React.Fragment>
        //     <Text>some header</Text>
        //   </React.Fragment>
        // }
        // ListFooterComponent={
        //   <React.Fragment>
        //     <Text>some footer</Text>
        //   </React.Fragment>
        // }
        // ListEmptyComponent={
        //   <React.Fragment>
        //     <Text>Empty</Text>
        //   </React.Fragment>
        // }
        data={data}
        renderItem={render}
        keyExtractor={({ id, i }) => `id_${id}_${Math.random()}`}
        contentContainerStyle={{ padding: 10 }}
        // initialScrollIndex={1}
        // onEndReachedThreshold={1}
        onEndReached={(info) => {
          console.log(info);
          // getList();
        }}
        refreshing={false}
        onRefresh={() => {
          console.log("reeeee");
          // getList();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
  },
  separator: {
    backgroundColor: "pink",
    height: 50,
  },
});

List.displayName = _kDisplayName;

export default List;
