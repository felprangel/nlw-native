import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type CategoryProps = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export function Category(props: CategoryProps) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
}
