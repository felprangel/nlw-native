import { Text, useWindowDimensions } from "react-native";
import { Place, PlaceProps } from "../Place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { styles } from "./styles";
import { router } from "expo-router";

type Props = {
  data: PlaceProps[];
};

export function Places(props: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoint = {
    min: 278,
    max: dimensions.height - 128,
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoint.min, snapPoint.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={props.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Place
            data={item}
            onPress={() => router.navigate(`/market/${item.id}`)}
          />
        )}
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
