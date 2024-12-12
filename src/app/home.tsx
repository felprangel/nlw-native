import { api } from "@/services/api";
import { useEffect } from "react";
import { Alert, Text, View } from "react-native";

export default function Home() {
  useEffect(() => {
    fetchCategories();
  });

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      console.log(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Categorias", "Não foi possível carregas as categorias");
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
    </View>
  );
}
