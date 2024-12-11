import { Text, View } from "react-native";
import { styles } from "./styles";

export function Step() {
  return (
    <View style={styles.container}>
      <Text>Titulo</Text>
      <Text>Descrição</Text>
    </View>
  );
}
