import { FlatList, View } from "react-native";
import { Category } from "../Category";

export type CategoriesProps = {
  id: string;
  name: string;
};

type Props = {
  data: CategoriesProps[];
};

export function Categories(props: Props) {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Category name={item.name} iconId={item.id} />}
    />
  );
}
