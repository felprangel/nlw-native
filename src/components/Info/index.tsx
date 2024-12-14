import { IconProps } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type InfoProps = {
  description: string;
  icon: React.ComponentType<IconProps>;
};

export function Info(props: InfoProps) {
  return (
    <View style={styles.container}>
      <props.icon size={16} color={colors.gray[400]} />
      <Text style={styles.text}>{props.description}</Text>
    </View>
  );
}
