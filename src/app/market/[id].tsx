import { api } from "@/services/api";
import { router, useLocalSearchParams } from "expo-router";
import { Alert, Text, View } from "react-native";

export default function Market() {
  const params = useLocalSearchParams<{ id: string }>();

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`);
      console.log(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível carregar os dados", [
        { text: "OK", onPress: () => router.back() },
      ]);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>{params.id}</Text>
    </View>
  );
}
