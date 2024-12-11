import { Text, View } from "react-native";
import { styles } from "./styles";

export function Step() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Titulo</Text>
      <Text style={styles.description}>Descrição</Text>
    </View>
  );
}
