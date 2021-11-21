import { useEffect, useState, useCallback } from "react";
import * as ImagePicker from "expo-image-picker";

interface useCamerPermitionResult {
  status: ImagePicker.PermissionStatus,
  updateStatus: () => Promise<void>,
  image: any,
  pickImage: any,
}

export const useCameraPermition = (): useCamerPermitionResult => {
  const [status, setStatus] = useState<ImagePicker.PermissionStatus>(null);
  const [image, setImage] = useState(null);

  const getPermition = useCallback( async () => {
    console.log("getPermition");
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setStatus(status);
  }, []);

  useEffect(() => {
    getPermition();
  }, []);

  const updateStatus = useCallback( async () => {
    console.log("updateStatus");
    await getPermition();
  }, []);

  const pickImage = useCallback(async () => {
    if (status === ImagePicker.PermissionStatus.GRANTED) {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    setImage(result);

  }, []);

  return {
    status,
    updateStatus,
    image,
    pickImage,
  };
};
