import { StyleSheet, Pressable, Text } from "react-native";

// Button component
const Button = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} 
            style={({pressed}) =>
            [styles.resetButton,
            pressed ? styles.pressedButton :
            null]}>
            <Text style={styles.resetText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    resetButton: {
        backgroundColor: "#800020",
        width: "100%",
        alignItems: "center",
    },
    resetText: {
        color: "white",
        padding: 16,
        fontSize: 20,
    },
    pressedButton: {
      backgroundColor: "#ab002a"
    },
})

export {Button};