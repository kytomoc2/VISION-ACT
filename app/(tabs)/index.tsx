import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  function openCamera() {
    router.push("/camera");
  }

  function openPreview() {
    router.push("/preview");
  }

  function openResult() {
    router.push("/result");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>VisionAI</Text>

      {/* CAMERA */}
      <TouchableOpacity
        style={styles.button}
        onPress={openCamera}
      >
        <Text style={styles.buttonText}>
          Open Camera
        </Text>
      </TouchableOpacity>

      {/* PREVIEW */}
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={openPreview}
      >
        <Text style={styles.buttonText}>
          Go to Preview
        </Text>
      </TouchableOpacity>

      {/* RESULT */}
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={openResult}
      >
        <Text style={styles.buttonText}>
          Go to Result
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    gap: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#2E5BBA",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },

  buttonSecondary: {
    backgroundColor: "#444",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

});