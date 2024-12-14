import { Cover } from "@/components/Cover";
import { DetailsProps } from "@/components/Details";
import { Loading } from "@/components/Loading";
import { api } from "@/services/api";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

type DataProps = DetailsProps & {
  cover: string;
};

export default function Market() {
  const [data, setData] = useState<DataProps>();
  const [loading, setLoading] = useState(true);
  const params = useLocalSearchParams<{ id: string }>();
  useEffect(() => {
    fetchMarket();
  }, [params]);

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível carregar os dados", [
        { text: "OK", onPress: () => router.back() },
      ]);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={data.cover} />
    </View>
  );
}
