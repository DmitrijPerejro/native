import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { usePlatform } from "../hooks/usePlatform";
import { useMediaLibrary } from "../hooks/useMediaLibrary";
import { useCamera } from "../hooks/useCamera";

const _kDisplayName = "UICameraPicker";

export interface UICameraPickerProps {}

const UICameraPicker: React.FC<UICameraPickerProps> = (props) => {
  const [photo, setPhoto] = React.useState(null);
  const pickImageMediaLibrary = useMediaLibrary();
  const pickCamera = useCamera();

  const camerahandler = React.useCallback(async () => {
    console.log("camerahandler");
    const result: any = await pickCamera();
    
    console.log("DONE");
    console.log(result);
    setPhoto(result);
  }, []);
  
  return (
    <View style={styles.container}>
      {
        photo !== null && <Text>{photo?.uri ?? "OLOLO1"}</Text>
      }
      {
        photo && (
          <Image
            source={{
              uri: photo.uri,
              width: photo.width,
              height: photo.height,
            }}
          />
        )
      }
      <Button
        onPress={pickImageMediaLibrary}
        title={"requestMediaLibraryPermissionsAsync"}
      >
      </Button>
      <Button
        onPress={camerahandler}
        title={"onRequestCameraPermissionsAsync"}
      >
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
});

UICameraPicker.displayName = _kDisplayName;

export default UICameraPicker;
