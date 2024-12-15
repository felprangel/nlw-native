import { FlatList, View } from "react-native";
import { Category } from "../Category";
import { styles } from "./styles";

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect(id: string): void;
};

export function Categories(props: Props) {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => props.onSelect(item.id)}
          isSelected={item.id === props.selected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  );
}
