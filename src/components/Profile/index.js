import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";

const Profile = () => {
  return (
    <View>
      <Image
        style={styles.user_profile}
        source={{
          uri:
            "https://avatars0.githubusercontent.com/u/50222216?s=460&u=d1dfdd44a6485a91f0dd1f6fc1877029029befbd&v=4",
        }}
      />
    </View>
  );
};

export default Profile;
