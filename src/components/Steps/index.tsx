import { Text, View } from "react-native";
import { styles } from "./styles";
import { Step } from "../Step";

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>
      <Step />
    </View>
  );
}
