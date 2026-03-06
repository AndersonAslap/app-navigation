import { View } from "react-native";

import { StackRoutesProps } from "@/routes/StackRoutes";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { DrawerRoutesProps } from "@/routes/DrawerRoutes";

/* Utilizando a props navigation que vem do contexto de navegação */
export function Home({ navigation }: DrawerRoutesProps<"home">) {
    
    return (
        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <ButtonIcon name="add-circle" onPress={() => navigation.navigate("product", { id: "100" })}/>
                <Title>Home</Title>
                <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()}/>
            </Header>
        </View>
    )
}

/*
Sem utilizar a props navigation que vem do contexto de navegação

import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon name="add-circle" onPress={() => navigation.navigate("home")}/>
            </Header>
        </View>
    )
}
*/