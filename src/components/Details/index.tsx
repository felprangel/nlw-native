import { Text, View } from "react-native";
import { styles } from "./styles";

export type DetailsProps = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: number;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  data: DetailsProps;
};

export function Details(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.data.name}</Text>
      <Text style={styles.description}>{props.data.description}</Text>

      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>
      </View>
    </View>
  );
}
