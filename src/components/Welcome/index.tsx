import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}></Text>
    </View>
  );
}
