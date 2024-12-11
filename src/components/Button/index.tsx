import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, props.style]}
      disabled={props.isLoading}
      {...props}
    >
      {props.isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
}

function Title(props: TextProps) {
  return <Text style={styles.title}>{props.children}</Text>;
}

Button.Title = Title;

export { Button };
