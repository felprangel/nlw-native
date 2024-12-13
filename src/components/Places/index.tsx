import { useWindowDimensions } from "react-native";
import { Place, PlaceProps } from "../Place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRef } from "react";

type Props = {
  data: PlaceProps[];
};

export function Places(props: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <BottomSheet>
      <BottomSheetFlatList
        data={props.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} />}
      />
    </BottomSheet>
  );
}
