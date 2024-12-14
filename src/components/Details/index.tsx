import { View } from "react-native";

export type DetailsProps = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: number;
  rules: {
    id: string;
    description: string;
  }[];
};

export function Details(props: DetailsProps) {
  return <View></View>;
}
