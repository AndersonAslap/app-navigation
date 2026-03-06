import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
    name: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ name, ...rest }: ButtonIconProps) {
    return (
        <TouchableOpacity {...rest}>
            <MaterialIcons name={name} size={32} />
        </TouchableOpacity>
    )
}