import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useDimensions } from "../../hooks/useDimensions";
import GallerySlide from "./GallerySlide";

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

const Elem: React.FC= (props) => {
  const { width, height } = useDimensions();
  console.log(1);

  const keyExtractor = React.useCallback((item, index) => (index as number).toString(), []);
  const renderItem = ({ item }) => (
    <GallerySlide
      uri={item}
      width={width}
      height={height}
    />
  );

  return (
    <View>
      <FlatList
        horizontal={true}
        data={gallery}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        pagingEnabled={true}
      />
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
