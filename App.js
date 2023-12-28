//import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { ChessPiecesTab } from './components';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.containerHalf, styles.rotate]}>
        <View style={styles.boardContainer}>
          <Text style={styles.scoreText}>Score: 0</Text>
          <View style={styles.takenPiecesContainer}>
          </View>
        </View>
        <ChessPiecesTab color={"black"}/>
      </View>
      <Pressable style={({pressed}) => [styles.resetButton, pressed ? styles.pressedButton : null]}>
        <Text style={styles.resetText}>RESET SCORE</Text>
      </Pressable>
      <View style={styles.containerHalf}>
        <View style={styles.boardContainer}>
          <Text style={styles.scoreText}>Score: 0</Text>
          <View style={styles.takenPiecesContainer}>
          </View>
        </View>
        <ChessPiecesTab color={"white"}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
  },
  containerHalf: {
    backgroundColor: "#F0EAD9",
    width: "100%",
    flex: 1,
  },
  rotate: {
    transform: "rotate(180deg)",
  },
  boardContainer: {
    flex: 1,
    padding: (24, 24),
  },
  takenPiecesContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
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
  scoreText: {
    fontSize: 20,
  },
  pressedButton: {
    backgroundColor: "#4fbfff"
  }
});
