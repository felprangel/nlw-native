import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

function Button(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      {props.children}
    </TouchableOpacity>
  );
}

function Title(props: TextProps) {
  return <Text style={styles.title}>{props.children}</Text>;
}

Button.Title = Title;

export { Button };
