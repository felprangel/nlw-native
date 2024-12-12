import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./styles";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export function Place(props: Props) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Image style={styles.image} source={{ uri: props.data.cover }} />
      <View style={styles.content}>
        <Text style={styles.name}>{props.data.name}</Text>
        <Text style={styles.description}>{props.data.description}</Text>
        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={styles.tickets}>
            {props.data.coupons} cupons disponíveis
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
