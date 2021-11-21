import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { usePlatform } from "../hooks/usePlatform";
import { useCameraPermition } from "../hooks/useCameraPermition";

const _kDisplayName = "UICameraPicker";

export interface UICameraPickerProps {}

const UICameraPicker: React.FC<UICameraPickerProps> = (props) => {
  const { status, updateStatus, image, pickImage } = useCameraPermition();
  
  return (
    <View style={styles.container}>
      <Text>
        {status}
      </Text>
      <Button
        onPress={pickImage}
        title={"try to update"}
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
