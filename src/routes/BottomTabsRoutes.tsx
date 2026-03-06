import { MaterialIcons } from "@expo/vector-icons";
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type BottomTabsRoutesList = {
    home: undefined;
    product: undefined | { id: string };
}

export type BottomTabsRoutesProps<T extends keyof BottomTabsRoutesList> =
    BottomTabScreenProps<BottomTabsRoutesList, T>;

const Tab = createBottomTabNavigator<BottomTabsRoutesList>();

export function TabRoutes() {
    return (
        <Tab.Navigator 
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#2C46B1",
                tabBarInactiveTintColor: "#444444",
                tabBarLabelPosition: "beside-icon"
            }}
        >
            <Tab.Screen 
                name="home" 
                component={Home} 
                options={{
                    tabBarLabel: "Início",
                    tabBarIcon: ({ color, size }) => <MaterialIcons color={color} name="home" size={size}/>
                }}
            />

            <Tab.Screen 
                name="product" 
                component={Product} 
                options={{
                    tabBarLabel: "Produto",
                    tabBarIcon: ({ color, size }) => <MaterialIcons color={color} name="add-circle" size={size}/>
                }}
            />
        </Tab.Navigator>
    )
}