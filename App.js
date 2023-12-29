//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
//import { ChessPiecesTab } from './components';
import { ChessPiece, Button } from './components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [takenPieces, setTakenPieces] = useState([]);
  const [whiteScore, setWhiteScore] = useState(0);
  const [blackScore, setBlackScore] = useState(0);

  const iconSize = 32;

  const takePiece = (name, color) => {
    setTakenPieces(takenPieces => [...takenPieces, {key: uuidv4(), name, color}]);
    
    score = calculateScore(name, color);
    if (color === "white") setWhiteScore(whiteScore + score);
    else setBlackScore(blackScore + score);
  }

  const removePiece = (item) => {
    removeKey = item.key;
    setTakenPieces(takenPieces => {return takenPieces.filter((item) => item.key !== removeKey)});

    score = calculateScore(item.name, item.color);
    if (item.color === "white") setWhiteScore(whiteScore - score);
    else setBlackScore(blackScore - score);
  }

  const calculateScore = (name) => {
    switch (name) {
      case "chess-pawn":
        score = 1;
        break;
      case "chess-bishop":
        score = 3;
        break;
      case "chess-knight":
        score = 3;
        break;
      case "chess-rook":
        score = 5;
        break;
      case "chess-queen":
        score = 9;
        break;
      case "chess-king":
        score = 999;
        break;
    }
    return score;
  }

  const resetScore = () => {
    setTakenPieces([]);
    setWhiteScore(0);
    setBlackScore(0);
  }

  const renderTakenPieces = (item) => {
    return (
    <Pressable key={item.key} onPress={() => removePiece(item)}>
      <MaterialCommunityIcons key={item.key} name={item.name} size={iconSize} color={item.color} />
    </Pressable>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.containerHalf, styles.rotate]}>
        <View style={styles.boardContainer}>
          <Text style={styles.scoreText}>Points: {blackScore}</Text>
          <View style={styles.takenPiecesContainer}>
            {takenPieces.map((item) => (
              item.color === "black" ? renderTakenPieces(item)
              : null
              ))}
          </View>
        </View>
        <View style={styles.chessPieceContainer}>
          <ChessPiece onPress={() => {takePiece("chess-pawn", "black")}} name={"chess-pawn"} color={"black"}/>
          <ChessPiece onPress={() => {takePiece("chess-bishop", "black")}} name={"chess-bishop"} color={"black"}/>
          <ChessPiece onPress={() => {takePiece("chess-knight", "black")}} name={"chess-knight"} color={"black"}/>
          <ChessPiece onPress={() => {takePiece("chess-rook", "black")}} name={"chess-rook"} color={"black"}/>
          <ChessPiece onPress={() => {takePiece("chess-queen", "black")}} name={"chess-queen"} color={"black"}/>
          <ChessPiece onPress={() => {takePiece("chess-king", "black")}} name={"chess-king"} color={"black"}/>
        </View>
      </View>
      <Button onPress={() => resetScore()} text="RESET SCORE"/>
      <View style={styles.containerHalf}>
        <View style={styles.boardContainer}>
          <Text style={styles.scoreText}>Points: {whiteScore}</Text>
          <View style={styles.takenPiecesContainer}>
            {takenPieces.map((item) => (
              item.color === "white" ? renderTakenPieces(item)
              : null
              ))}
          </View>
        </View>
        <View style={styles.chessPieceContainer}>
          <ChessPiece onPress={() => {takePiece("chess-pawn", "white")}} name={"chess-pawn"} color={"white"}/>
          <ChessPiece onPress={() => {takePiece("chess-bishop", "white")}} name={"chess-bishop"} color={"white"}/>
          <ChessPiece onPress={() => {takePiece("chess-knight", "white")}} name={"chess-knight"} color={"white"}/>
          <ChessPiece onPress={() => {takePiece("chess-rook", "white")}} name={"chess-rook"} color={"white"}/>
          <ChessPiece onPress={() => {takePiece("chess-queen", "white")}} name={"chess-queen"} color={"white"}/>
          <ChessPiece onPress={() => {takePiece("chess-king", "white")}} name={"chess-king"} color={"white"}/>
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
  scoreText: {
    fontSize: 20,
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
