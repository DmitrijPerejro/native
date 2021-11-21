import { useEffect, useState } from "react";
import { Platform } from "react-native";

type OS = "android" | "ios" | "macos" | "windows" | "web";

interface usePlatformResult {
  platform: typeof Platform;
  OS: OS;
}

export const usePlatform = (): usePlatformResult => {
  const [platform, setPlatform] = useState<typeof Platform>(Platform);
  const [OS, setOS] = useState<OS>(Platform.OS);

  useEffect(() => {
    setPlatform(Platform);
    setOS(Platform.OS);
  }, [Platform]);

  return {
    platform,
    OS,
  };
};
