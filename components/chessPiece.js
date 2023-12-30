import { StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Constant variable for icon size
const iconSize = 32;

// Chess Piece component to display pressable chess piece icons
const ChessPiece = ({onPress, name, color, winner}) => {
    return (
        <Pressable onPress={onPress} disabled={winner !== ""}
            style={({pressed}) =>
            [styles.iconContainer,
            pressed ? styles.pressedIcon :
            null]}>
            <MaterialCommunityIcons name={name} size={iconSize} color={color}/>
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
    pressedIcon: {
        backgroundColor: "#F0EAD9",
    }
})

export {ChessPiece};