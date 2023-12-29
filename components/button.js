import { StyleSheet, Pressable, Text } from "react-native";

const Button = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.resetButton, pressed ? styles.pressedButton : null]}>
            <Text style={styles.resetText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    resetButton: {
        backgroundColor: "#0096EC",
        width: "100%",
        alignItems: "center",
    },
    resetText: {
        color: "white",
        padding: 16,
        fontSize: 18,
    },
    pressedButton: {
      backgroundColor: "#4fbfff"
    },
})

export {Button};