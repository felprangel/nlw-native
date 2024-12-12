import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";

type CategoryProps = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export function Category(props: CategoryProps) {
  const Icon = categoriesIcons[props.iconId];

  return (
    <Pressable style={styles.container}>
      <Icon size={16} />
      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
}
