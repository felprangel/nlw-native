import { Text, View } from "react-native";
import { styles } from "./styles";

interface StepProps {
  title: string;
  description: string;
}

export function Step(props: StepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}
