import { View, Image, Text } from "react-native";
import AppTextSpaceGroteskRegular from "./AppTextSpaceGroteskRegular";
import { Icon } from "react-native-elements";

export const Feed = (props) => {
  const { profile, username, post } = props;

  return (
    <View>
      {/* part 1 */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 8,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 100 }}
            source={profile}
          />
          {/* <Text style={{ marginLeft: 8, fontWeight: "bold" }}>{username}</Text> */}
          <AppTextSpaceGroteskRegular
            style={{ marginLeft: 8, fontWeight: "bold" }}
          >
            {username}
          </AppTextSpaceGroteskRegular>
        </View>
        <Icon name="dots-vertical" type="material-community" />
      </View>

      {/* part 2 */}
      <Image source={{ uri: post }} style={{ width: "100%", height: 300 }} />

      {/* part 3 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <view style={{ margin: 8 }}>
            <Icon name="heart-o" type="font-awesome" size={26} />
          </view>
          <view style={{ margin: 8 }}>
            <Icon name="comment-o" type="font-awesome" size={26} />
          </view>
          <view style={{ margin: 8 }}>
            <Icon name="paper-plane-outline" type="ionicon" size={26} />
          </view>
        </View>
        <view style={{ margin: 8 }}>
          <Icon name="bookmark-o" type="font-awesome" size={26} />
        </view>
      </View>
    </View>
  );
};

export const Story = (props) => {
  const { username, profile } = props;

  return (
    <View style={{ marginRight: 8, alignItems: "center" }}>
      <Image
        style={{ width: 80, height: 80, borderRadius: 100 }}
        source={profile}
      />
      {/* <Text>{username}</Text> */}
      <AppTextSpaceGroteskRegular>{username}</AppTextSpaceGroteskRegular>
    </View>
  );
};
