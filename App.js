//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
//import { ChessPiecesTab } from './components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [takenPieces, setTakenPieces] = useState([]);

  const iconSize = 32;

  const takePiece = (name, color) => {
    setTakenPieces(takenPieces => [...takenPieces, {key: uuidv4(), name, color}])
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.containerHalf, styles.rotate]}>
        <View style={styles.boardContainer}>
          <Text style={styles.scoreText}>Score: 0</Text>
          <View style={styles.takenPiecesContainer}>
            {takenPieces.map((item) => (
              item.color === "black" ?
              <MaterialCommunityIcons key={item.key} name={item.name} size={iconSize} color={item.color} />
              : null
            ))}
          </View>
        </View>
        <View style={styles.chessPieceContainer}>
          <Pressable onPress={() => {takePiece("chess-pawn", "black")}}>
            <MaterialCommunityIcons name="chess-pawn" size={iconSize} style={styles.iconContainer} color={"black"} />
          </Pressable>
          <Pressable onPress={() => {takePiece("chess-bishop", "black")}}>
            <MaterialCommunityIcons name="chess-bishop" size={iconSize} style={styles.iconContainer} color={"black"} />
          </Pressable>
          <Pressable onPress={() => {takePiece("chess-knight", "black")}}>
            <MaterialCommunityIcons name="chess-knight" size={iconSize} style={styles.iconContainer} color={"black"} />
          </Pressable>
          <Pressable onPress={() => {takePiece("chess-rook", "black")}}>
            <MaterialCommunityIcons name="chess-rook" size={iconSize} style={styles.iconContainer} color={"black"} />
          </Pressable>
          <Pressable onPress={() => {takePiece("chess-queen", "black")}}>
            <MaterialCommunityIcons name="chess-queen" size={iconSize} style={styles.iconContainer} color={"black"} />
          </Pressable>
          <Pressable onPress={() => {takePiece("chess-king", "black")}}>
            <MaterialCommunityIcons name="chess-king" size={iconSize} style={styles.iconContainer} color={"black"} />
          </Pressable>
        </View>
      </View>
      <Pressable style={({pressed}) => [styles.resetButton, pressed ? styles.pressedButton : null]}>
        <Text style={styles.resetText}>RESET SCORE</Text>
      </Pressable>
      <View style={styles.containerHalf}>
        <View style={styles.boardContainer}>
          <Text style={styles.scoreText}>Score: 0</Text>
          <View style={styles.takenPiecesContainer}>
            {takenPieces.map((item) => (
              item.color === "white" ?
              <MaterialCommunityIcons key={item.key} name={item.name} size={iconSize} color={item.color} />
              : null
            ))}
          </View>
        </View>
        <View style={styles.chessPieceContainer}>
          <Pressable onPress={() => {takePiece("chess-pawn", "white")}}>
            <MaterialCommunityIcons name="chess-pawn" size={iconSize} style={styles.iconContainer} color={"white"} />
          </Pressable>
          <Pressable onPress={() => {takePiece("chess-bishop", "white")}}>
            <MaterialCommunityIcons name="chess-bishop" size={iconSize} style={styles.iconContainer} color={"white"} />
          </Pressable>
          <Pressable onPress={() => {takePiece("chess-knight", "white")}}>
            <MaterialCommunityIcons name="chess-knight" size={iconSize} style={styles.iconContainer} color={"white"} />
          </Pressable>
          <Pressable onPress={() => {takePiece("chess-rook", "white")}}>
            <MaterialCommunityIcons name="chess-rook" size={iconSize} style={styles.iconContainer} color={"white"} />
          </Pressable>
          <Pressable onPress={() => {takePiece("chess-queen", "white")}}>
            <MaterialCommunityIcons name="chess-queen" size={iconSize} style={styles.iconContainer} color={"white"} />
          </Pressable>
          <Pressable onPress={() => {takePiece("chess-king", "white")}}>
            <MaterialCommunityIcons name="chess-king" size={iconSize} style={styles.iconContainer} color={"white"} />
          </Pressable>
        </View>
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
  },
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
});
