import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import { ChessPiece, Button, ScoreText } from './components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  // Declaration of state variables
  const [takenPieces, setTakenPieces] = useState([]);
  const [whiteScore, setWhiteScore] = useState(0);
  const [blackScore, setBlackScore] = useState(0);
  const [winner, setWinner] = useState("");
  
  // Declaration of constant variables
  const iconSize = 32;
  const white = "white";
  const black = "black";
  const pieces = {
    pawn: "chess-pawn",
    bishop: "chess-bishop",
    knight: "chess-knight",
    rook: "chess-rook",
    queen: "chess-queen",
    king: "chess-king",
  };

  // Function for taking a chess piece
  const takePiece = (name, color) => {
    // Limit amount of total pieces to be taken by 32
    if (takenPieces.length >= 32) return;
  
    setTakenPieces(takenPieces => [...takenPieces, {key: uuidv4(), name, color}]);
    // If king is taken, display winner based on color
    if (name === pieces.king)
    {
      setWinner(color + " wins by checkmate!");
      return;
    }
    
    score = calculateScore(name);
    // Add to score
    if (color === white) setWhiteScore(whiteScore + score);
    else setBlackScore(blackScore + score);
  }

  // Function for removing a taken chess piece from the board
  const removePiece = (item) => {
    removeKey = item.key;
    setTakenPieces(takenPieces => {return takenPieces.filter((item) => item.key !== removeKey)});
    // If king is removed from board, reset winner text
    if (item.name === pieces.king)
    {
      setWinner("");
      return;
    }
    
    score = calculateScore(item.name);
    // Subtract from score
    if (item.color === white) setWhiteScore(whiteScore - score);
    else setBlackScore(blackScore - score);
  }

  // Function for calculating score based on selected chess piece
  const calculateScore = (name) => {
    switch (name) {
      case pieces.pawn:
        score = 1;
        break;
      case pieces.bishop:
        score = 3;
        break;
      case pieces.knight:
        score = 3;
        break;
      case pieces.rook:
        score = 5;
        break;
      case pieces.queen:
        score = 9;
        break;
    }
    return score;
  }

  // Function for resetting state values
  const resetScore = () => {
    setTakenPieces([]);
    setWhiteScore(0);
    setBlackScore(0);
    setWinner("");
  }

  // Render the taken pieces on the boards
  const renderTakenPieces = (item) => {
    return (
    <Pressable key={item.key} onPress={() => removePiece(item)} style={styles.takenPiece}>
      <MaterialCommunityIcons key={item.key} name={item.name} size={iconSize} color={item.color} />
    </Pressable>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={"#E4D8B8"}/>
      <View style={[styles.containerHalf, styles.rotate]}>
        <View style={styles.boardContainer}>
          <ScoreText color={black} winner={winner} whiteScore={whiteScore} blackScore={blackScore} white={white}/>
          <View style={styles.takenPiecesContainer}>
            {takenPieces.map((item) => (
              item.color === black ? renderTakenPieces(item)
              : null
              ))}
          </View>
        </View>
        <View style={styles.chessPiecesTab}>
          <ChessPiece onPress={() => {takePiece(pieces.pawn, black)}} name={pieces.pawn} color={black} winner={winner}/>
          <ChessPiece onPress={() => {takePiece(pieces.bishop, black)}} name={pieces.bishop} color={black} winner={winner}/>
          <ChessPiece onPress={() => {takePiece(pieces.knight, black)}} name={pieces.knight} color={black} winner={winner}/>
          <ChessPiece onPress={() => {takePiece(pieces.rook, black)}} name={pieces.rook} color={black} winner={winner}/>
          <ChessPiece onPress={() => {takePiece(pieces.queen, black)}} name={pieces.queen} color={black} winner={winner}/>
          <ChessPiece onPress={() => {takePiece(pieces.king, black)}} name={pieces.king} color={black} winner={winner}/>
        </View>
      </View>
      <Button onPress={() => resetScore()} text="RESET SCORE"/>
      <View style={styles.containerHalf}>
        <View style={styles.boardContainer}>
          <ScoreText color={white} winner={winner} whiteScore={whiteScore} blackScore={blackScore} white={white}/>
          <View style={styles.takenPiecesContainer}>
            {takenPieces.map((item) => (
              item.color === white ? renderTakenPieces(item)
              : null
              ))}
          </View>
        </View>
        <View style={styles.chessPiecesTab}>
          <ChessPiece onPress={() => {takePiece(pieces.pawn, white)}} name={pieces.pawn} color={white} winner={winner}/>
          <ChessPiece onPress={() => {takePiece(pieces.bishop, white)}} name={pieces.bishop} color={white} winner={winner}/>
          <ChessPiece onPress={() => {takePiece(pieces.knight, white)}} name={pieces.knight} color={white} winner={winner}/>
          <ChessPiece onPress={() => {takePiece(pieces.rook, white)}} name={pieces.rook} color={white} winner={winner}/>
          <ChessPiece onPress={() => {takePiece(pieces.queen, white)}} name={pieces.queen} color={white} winner={winner}/>
          <ChessPiece onPress={() => {takePiece(pieces.king, white)}} name={pieces.king} color={white} winner={winner}/>
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
    padding: 24,
  },
  takenPiecesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 16,
  },
  takenPiece: {
    backgroundColor: "#E4D8B8",
    borderRadius: 4,
    margin: 2,
  },
  chessPiecesTab: {
    flexDirection: "row",
    backgroundColor: "#DBCEAC",
    justifyContent: "center",
  },
});
