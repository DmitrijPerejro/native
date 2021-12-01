import React from "react";
import { StyleSheet, View, FlatList, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { useDimensions } from "../../hooks/useDimensions";
import GallerySlide from "./GallerySlide";
import GalleryThumb from "./GalleryThumb";

const _kDisplayName = "Gallery";

const gallery = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2c/Lady_Gaga_interview_2016.jpg",
  "https://muz-tv.ru/storage/images/news/crops/news-page/fydbGNbrDqbbc4fILPl0Y3RGEJcm5a5g5O3goDsT.jpg",
  "https://www.ukrgate.com/eng/wp-content/uploads/2021/07/Lady-Gaga-Appeared-in-Luxurious-Dresses-in-New-York1.jpg",
  "https://www.biography.com/.image/t_share/MTgxMDg1MDI3MTkzMzMzMDk2/gettyimages-1127409044.jpg",
  "https://akns-images.eonline.com/eol_images/Entire_Site/201981/rs_600x600-190901105622-600-lady-gaga.cm.9119.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top",
  "https://cdn.7days.ru/upload/images/e72/b9e01133e2e13f612a1fa70f3b9c3.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyg8Es5dzKtfCeaVZ2Y_0qNcwJ_J55qUvLcA&usqp=CAU",
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/ED25/production/_121890706_51a86df4-3ddb-4928-bb4b-e2d3205f8eef.jpg",
  "https://nypost.com/wp-content/uploads/sites/2/2021/11/lady-gaga-gained-weight-gucci-04.jpg?quality=80&strip=all",
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/14F60/production/_121565858_hi071950589.jpg",
];

const thumbSize = 100;
const separatorSize = 10;

const Elem: React.FC= () => {
  const { width, height } = useDimensions();
  const [activeThumbIndex, setActiveThumbIndex] = React.useState<number>(0);
  const refListSlides = React.useRef<FlatList>(null);
  const refListThumbs = React.useRef<FlatList>(null);

  const keyExtractor = React.useCallback((item, index) => (index as number).toString(), []);
  const renderItem = React.useCallback(({ item }: { item: string }) => (
    <GallerySlide
      uri={item}
      width={width}
      height={height}
    />
  ), []);

  const _setActiveThumbIndex = React.useCallback((index) => () => {
    setActiveThumbIndex(index);
    scrollToindex(index);
  }, []);

  const scrollToindex = React.useCallback((index) => {
    refListSlides.current.scrollToOffset({
      offset: width * index,
      animated: true,
    });
  }, []);

  const _onMomentumScrollEnd = React.useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setActiveThumbIndex(Math.floor(event.nativeEvent.contentOffset.x / width));
  }, []);

  React.useEffect(() => {
    const index = activeThumbIndex;
    
    if (index * (thumbSize + separatorSize ) - thumbSize / 2 > width / 2) {
      refListThumbs.current.scrollToOffset({
        offset: index * (thumbSize + separatorSize) - width / 2 + thumbSize / 2,
        animated: true,
      });
    } else {
      refListThumbs.current.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  }, [activeThumbIndex]);

  const renderThumbs = React.useCallback(({ item, index }: { item: string, index: number }) => (
    <GalleryThumb
      uri={item}
      onPress={_setActiveThumbIndex(index)}
      isActive={index === activeThumbIndex}
      thumbSize={thumbSize}
    />
  ), [activeThumbIndex]);

  const renderSeparator = React.useCallback(() => (
    <View style={{width: separatorSize}} />
  ), []);

  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <FlatList
        ref={refListSlides}
        horizontal={true}
        data={gallery}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        pagingEnabled={true}
        onMomentumScrollEnd={_onMomentumScrollEnd}
      />

      <View style={{
        position: "absolute",
        bottom: 80,
      }}>
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          ref={refListThumbs}
          horizontal={true}
          data={gallery}
          keyExtractor={keyExtractor}
          renderItem={renderThumbs}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            padding: separatorSize,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
});

Elem.displayName = _kDisplayName;
const Gallery = React.memo(Elem);

export default Gallery;
