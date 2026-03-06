import { View } from "react-native";

import { StackRoutesProps } from "@/routes/StackRoutes";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { useRoute } from "@react-navigation/native";

type RouteParams = StackRoutesProps<"product">;

export function Product({ navigation, route }: StackRoutesProps<"product">) {
    //const { params } = useRoute<RouteParams["route"]>();

    return (
        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <ButtonIcon name="arrow-circle-left" onPress={() => navigation.goBack()}/>
                <Title>Product {route.params?.id}</Title>
                {/*<Title>Product {params?.id}</Title>*/}
            </Header>
        </View>
    )
}