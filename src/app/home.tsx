import { Categories, CategoriesProps } from "@/components/Categories";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);

  useEffect(() => {
    fetchCategories();
  });

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Categorias", "Não foi possível carregas as categorias");
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories} />
    </View>
  );
}
