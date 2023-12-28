import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const iconSize = 32;

const ChessPiecesTab = ({color}) => {
    return (
        <View style={styles.chessPieceContainer}>
            <MaterialCommunityIcons name="chess-pawn" size={iconSize} style={styles.iconContainer} color={color} />
            <MaterialCommunityIcons name="chess-bishop" size={iconSize} style={styles.iconContainer} color={color} />
            <MaterialCommunityIcons name="chess-knight" size={iconSize} style={styles.iconContainer} color={color} />
            <MaterialCommunityIcons name="chess-rook" size={iconSize} style={styles.iconContainer} color={color} />
            <MaterialCommunityIcons name="chess-queen" size={iconSize} style={styles.iconContainer} color={color} />
            <MaterialCommunityIcons name="chess-king" size={iconSize} style={styles.iconContainer} color={color} />
        </View>
    )
}

const styles = StyleSheet.create({
    chessPieceContainer: {
        flexDirection: "row",
        backgroundColor: "#DBCEAC",
        justifyContent: "center",
    },
    iconContainer: {
        padding: 8,
        marginVertical: 12,
        marginHorizontal: 4,
        backgroundColor: "#E4D8B8",
        borderRadius: 4,
    }
})

export {ChessPiecesTab};