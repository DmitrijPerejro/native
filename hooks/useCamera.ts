import React from "react";
import * as ImagePicker from "expo-image-picker";

interface useCameraResult {
  status: ImagePicker.PermissionStatus,
  updateStatus: () => Promise<void>,
  image: any,
  pickImage: any,
}

export const useCamera = () => {
  const [status, setStatus] = React.useState<ImagePicker.PermissionStatus>(null);

  const onRquestMediaLibraryPermissionsAsync = React.useCallback( async () => {
    console.log("requestCameraPermissionsAsync");
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    setStatus(status);
  }, []);

  React.useEffect(() => {
    console.log("DID MOUNT", status);
    if (status === null) {
      onRquestMediaLibraryPermissionsAsync();
    }
  }, []);

  const pickCamera = React.useCallback( async () => {
    console.log("status", status);

    if (status !== ImagePicker.PermissionStatus.GRANTED) {
      console.log("case 1");
      return ;
    }

    if (status === ImagePicker.PermissionStatus.GRANTED) {
      console.log("case 2");
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      
      console.log("pickCamera result");
      console.log(result);

      return result;
    } 
    
  }, [status]);

  return pickCamera;
};
