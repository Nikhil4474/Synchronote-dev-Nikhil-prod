// Users can chose to upload either video or transcript files. Videos will automatically be converted to transcripts.
// Ai will fix the transcripts to match the audio. and proofread it
// Ai will then convert transcript to notes.

import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function VideotoNotes() {
  return (
    <View style={styles.container}>
      <Text>Video to Notes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
