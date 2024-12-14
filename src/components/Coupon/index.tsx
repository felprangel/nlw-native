import { Text, View } from "react-native";
import { styles } from "./styles";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

type CouponProps = {
  code: string;
};

export function Coupon(props: CouponProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utiliza esse cupom</Text>

      <View style={styles.content}>
        <IconTicket size={24} color={colors.green.light} />
        <Text style={styles.code}>{props.code}</Text>
      </View>
    </View>
  );
}
