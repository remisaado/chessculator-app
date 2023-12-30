import { StyleSheet, Text } from "react-native";

// Score Text component to display winner if king is taken otherwise show each players score
const ScoreText = ({color, winner, whiteScore, blackScore, white}) => {
    return (
        <Text style={[styles.scoreText,
        winner !== "" ? styles.winnerText :
        null, color === white ? styles.white :
        styles.black]}>
            {winner !== "" ? winner :
            "Points: " + (color === white ? whiteScore : blackScore)}
        </Text>
    )
}

const styles = StyleSheet.create({
    scoreText: {
        fontSize: 20,
        backgroundColor: "#DBCEAC",
        alignSelf: "flex-start",
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
      },
      winnerText: {
        textTransform: "capitalize",
        alignSelf: "center",
        fontSize: 24,
      },
      white: {
        color: "#FFFFFF",
      },
      black: {
        color: "#000000",
      },
})

export {ScoreText};