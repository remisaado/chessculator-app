import { StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const iconSize = 32;

const ChessPiece = ({onPress, name, color}) => {
    return (
        <Pressable onPress={onPress}>
            <MaterialCommunityIcons name={name} size={iconSize} style={styles.iconContainer} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        padding: 8,
        marginVertical: 12,
        marginHorizontal: 4,
        backgroundColor: "#E4D8B8",
        borderRadius: 4,
    },
})

export {ChessPiece};