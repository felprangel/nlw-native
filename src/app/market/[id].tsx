import { Button } from "@/components/Button";
import { Coupon } from "@/components/Coupon";
import { Cover } from "@/components/Cover";
import { Details, DetailsProps } from "@/components/Details";
import { Loading } from "@/components/Loading";
import { api } from "@/services/api";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Modal, ScrollView, View } from "react-native";

type DataProps = DetailsProps & {
  cover: string;
};

export default function Market() {
  const [data, setData] = useState<DataProps>();
  const [coupon, setCoupon] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [couponIsFetching, setCouponIsFetching] = useState(false);
  const qrLock = useRef(false);

  const [_, requestPermission] = useCameraPermissions();
  const params = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    fetchMarket();
  }, [params.id, coupon]);

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

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission();

      if (!granted) {
        return Alert.alert(
          "Câmera",
          "Precisamos da sua permissão para acessar a câmera"
        );
      }
      qrLock.current = false;
      setModalVisible(true);
    } catch (error) {
      console.error(error);
      Alert.alert("Câmera", "Não foi possível acessar a câmera");
    }
  }

  async function getCoupon(code: string) {
    try {
      setCouponIsFetching(true);
      const { data } = await api.patch(`/coupons/${code}`);

      Alert.alert("Cupom", data.coupon);
      setCoupon(data.code);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível utilizar o cupom");
    } finally {
      setCouponIsFetching(false);
    }
  }

  function handleUseCoupon(code: string) {
    setModalVisible(false);

    Alert.alert(
      "Cupom",
      "Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?",
      [
        { style: "cancel", text: "Não" },
        { text: "Sim", onPress: () => getCoupon(code) },
      ]
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <Redirect href="/home" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={data.cover} />
        <Details data={data} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>

      <View style={{ padding: 32 }}>
        <Button>
          <Button.Title onPress={handleOpenCamera}>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={modalVisible}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true;
              setTimeout(() => handleUseCoupon(data), 500);
            }
          }}
        />

        <View style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
          <Button
            onPress={() => setModalVisible(false)}
            isLoading={couponIsFetching}
          >
            <Button.Title>Fechar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  );
}
