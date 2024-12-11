import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

function Button(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity activeOpacity={0.8}>{props.children}</TouchableOpacity>
  );
}

function Title(props: TextProps) {
  return <Text>{props.children}</Text>;
}

Button.Title = Title;

export { Button };
