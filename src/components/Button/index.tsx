import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

type IconProps = {
  icon: React.ComponentType<TablerIconProps>;
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

function Icon(props: IconProps) {
  return <props.icon size={24} color={colors.gray[100]} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
