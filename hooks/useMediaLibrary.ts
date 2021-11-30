import React from "react";
import * as ImagePicker from "expo-image-picker";

export const useMediaLibrary = () => {
  const [status, setStatus] = React.useState<ImagePicker.PermissionStatus>(null);

  const onRequestMediaLibraryPermissionsAsync = React.useCallback( async () => {
    console.log("requestMediaLibraryPermissionsAsync");
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setStatus(status);
  }, []);

  const pickImageMediaLibrary = React.useCallback( async () => {
    if (status === ImagePicker.PermissionStatus.GRANTED) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
    } else {
      onRequestMediaLibraryPermissionsAsync();
    }
  }, [status]);
  
  return pickImageMediaLibrary;
};
