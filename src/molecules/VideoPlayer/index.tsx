import { scale } from "@ui";
import { styles } from "./styles";
import Typography from "../Typography";
import React, { useCallback, useState } from "react";

import { Alert, StyleProp, View, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  url: string;
};

const VideoPlayer = ({ url, style }: Props) => {
  const URL=url?.slice(17)

  const [playing, setPlaying] = useState(true);
  const onStateChange = useCallback((state:string) => {
    if (state === "ended") {
      setPlaying(false);
      //Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return (
    <View style={[styles.container, style]}>
      {/* <Typography color="white" selectable>
        {url}
      </Typography> */}

    </View>
  );
};

export default VideoPlayer;
