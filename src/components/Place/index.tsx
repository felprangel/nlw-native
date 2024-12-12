import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

export function Place() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}></Text>
        <Text style={styles.description}></Text>
        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={styles.tickets}> cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
