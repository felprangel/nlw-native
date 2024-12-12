import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/theme";

type CategoryProps = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export function Category(props: CategoryProps) {
  const Icon = categoriesIcons[props.iconId];

  return (
    <Pressable
      style={[styles.container, props.isSelected && styles.containerSelected]}
      {...props}
    >
      <Icon size={16} color={colors.gray[props.isSelected ? 100 : 400]} />
      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
}
