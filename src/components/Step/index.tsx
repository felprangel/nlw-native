import { Text, View } from "react-native";
import { styles } from "./styles";
import { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

interface StepProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

export function Step(props: StepProps) {
  return (
    <View style={styles.container}>
      {props.icon && <props.icon size={40} color={colors.red.base} />}
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}
