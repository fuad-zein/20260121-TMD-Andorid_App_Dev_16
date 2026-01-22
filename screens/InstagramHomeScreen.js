import { View, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import AppTextScriptRegular from "../components/AppTextScriptRegular";
import { Feed, Story } from "../components/InstagramComponent";

const InstagramHomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <AppTextScriptRegular style={{ fontSize: 40, marginLeft: 16 }}>
          Instagram
        </AppTextScriptRegular>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginRight: 8 }}
        >
          <View style={{ margin: 8 }}>
            <Icon name="plus-square-o" type="font-awesome" size={26} />
          </View>

          <View style={{ margin: 8 }}>
            <Icon name="heart-o" type="font-awesome" size={26} />
          </View>

          <View style={{ margin: 8 }}>
            <Icon name="paper-plane-outline" type="ionicon" size={26} />
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={{ flexDirection: "row", margin: 8 }}>
          <ScrollView horizontal>
            <Story
              profile={require("../assets/images/profilePicture1.png")}
              username="budihanduk"
            />

            <Story
              profile={require("../assets/images/profilePicture2.png")}
              username="gabutnasional"
            />

            <Story
              profile={require("../assets/images/profilePicture3.png")}
              username="otwgaotw"
            />

            <Story
              profile={require("../assets/images/profilePicture4.png")}
              username="salahlogin"
            />

            <Story
              profile={require("../assets/images/profilePicture5.png")}
              username="magersejati"
            />

            <Story
              profile={require("../assets/images/profilePicture1.png")}
              username="budihanduk"
            />

            <Story
              profile={require("../assets/images/profilePicture2.png")}
              username="gabutnasional"
            />

            <Story
              profile={require("../assets/images/profilePicture3.png")}
              username="otwgaotw"
            />
          </ScrollView>
        </View>

        <Feed
          profile={require("../assets/images/profilePicture1.png")}
          username="budihanduk"
          post="https://wallpaperaccess.com/full/201215.jpg"
        />

        <Feed
          profile={require("../assets/images/profilePicture2.png")}
          username="gabutnasional"
          post="https://images5.alphacoders.com/316/316297.jpg"
        />

        <Feed
          profile={require("../assets/images/profilePicture3.png")}
          username="otwgaotw"
          post="https://wallpaperaccess.com/full/496881.jpg"
        />

        <Feed
          profile={require("../assets/images/profilePicture4.png")}
          username="salahlogin"
          post="https://images4.alphacoders.com/292/292026.jpg"
        />

        <Feed
          profile={require("../assets/images/profilePicture5.png")}
          username="magersejati"
          post="https://images5.alphacoders.com/316/316297.jpg"
        />
      </ScrollView>
    </View>
  );
};

export default InstagramHomeScreen;
