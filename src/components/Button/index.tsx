import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, props.style]}
    >
      {props.isLoading ? <ActivityIndicator /> : props.children}
    </TouchableOpacity>
  );
}

function Title(props: TextProps) {
  return <Text style={styles.title}>{props.children}</Text>;
}

Button.Title = Title;

export { Button };
