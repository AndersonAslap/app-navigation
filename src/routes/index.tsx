import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./StackRoutes";
import { TabRoutes } from "./BottomTabsRoutes";
import { DrawerRoutes } from "./DrawerRoutes";

export function Routes() {
    return (
        <NavigationContainer>
            {/*<StackRoutes />*/}
            {/*<TabRoutes />*/}
            <DrawerRoutes />
        </NavigationContainer>
    )
}