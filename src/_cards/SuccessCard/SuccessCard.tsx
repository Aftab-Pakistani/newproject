import { Button, Icon, Typography,Link } from "@molecules";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import styles from "./styles";

type Props = {
  title: string;
  desc: string;
  onpress?: any;
};

export const SuccessCard = ({ title, desc, onpress }: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.thumb}>
        <Icon name={"Check"} width={20} height={20} />
      </View>
      <Typography color="primary_main" variant="h3" style={styles.title}>
        Success
      </Typography>
      <Typography color="black" style={styles.text1}>
        Your applications has been submitted successfully.
      </Typography>
      <View style={styles.seprator} />
      <View style={styles.inner}>
        <Typography color="black" style={styles.text2}>
          Your applications has been submitted successfully.
        </Typography>
        <Typography color="black" style={styles.text3}>
          Your applications
        </Typography>
        <View style={styles.seprator} />
      </View>
      <Button
          label={"Back to Listing"}
          // onPress={onConnect}
          // loading={loading}
          color={"primary_lightest"}
          size="small"
          dark
        />
      <View style={styles.inner2}>
        <Link>
          <Typography color="primary_main" >
            Close
          </Typography>
        </Link>
      </View>
    </View>
  );
};

export default SuccessCard;
