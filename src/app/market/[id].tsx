import { Button } from "@/components/Button";
import { Coupon } from "@/components/Coupon";
import { Cover } from "@/components/Cover";
import { Details, DetailsProps } from "@/components/Details";
import { Loading } from "@/components/Loading";
import { api } from "@/services/api";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Modal, Text, View } from "react-native";

type DataProps = DetailsProps & {
  cover: string;
};

export default function Market() {
  const [data, setData] = useState<DataProps>();
  const [coupon, setCoupon] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

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

  function handleOpenCamera() {
    try {
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <Redirect href="/home" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={data.cover} />
      <Details data={data} />
      {coupon && <Coupon code={coupon} />}

      <View style={{ padding: 32 }}>
        <Button>
          <Button.Title onPress={handleOpenCamera}>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={modalVisible}>
        <Button onPress={() => setModalVisible(false)}>
          <Button.Title>Fechar</Button.Title>
        </Button>
      </Modal>
    </View>
  );
}
