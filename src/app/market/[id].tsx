import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Market() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1 }}>
      <Text>{params.id}</Text>
    </View>
  );
}
