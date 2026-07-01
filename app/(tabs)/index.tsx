import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<any[]>([]);

  function addTask() {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title: task,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
    setTask("");
  }

  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <View style={styles.container}>

      {/* CAMERA BUTTON */}
      <Pressable
        style={styles.cameraButton}
        onPress={() => router.push("/camera")}
      >
        <Text style={styles.cameraButtonText}>
          Open VisionAI Camera
        </Text>
      </Pressable>

      <Text style={styles.title}>VisionAI Tasks</Text>

      {/* INPUT */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter Task"
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <MaterialIcons name="add" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* TASK LIST */}
      {tasks.map((item) => (
        <View key={item.id} style={styles.taskRow}>

          <TouchableOpacity onPress={() => toggleTask(item.id)}>
            <MaterialIcons
              name={
                item.completed
                  ? "check-box"
                  : "check-box-outline-blank"
              }
              size={22}
              color={item.completed ? "#2E5BBA" : "#5A6472"}
            />
          </TouchableOpacity>

          <Text
            style={[
              styles.taskText,
              item.completed && { textDecorationLine: "line-through" },
            ]}
          >
            {item.title}
          </Text>

          <TouchableOpacity onPress={() => deleteTask(item.id)}>
            <MaterialIcons name="delete" size={20} color="#E74C3C" />
          </TouchableOpacity>

        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 40,
  },

  cameraButton: {
    backgroundColor: "#5B3FA3",
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },

  cameraButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  inputRow: {
    flexDirection: "row",
    marginVertical: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },

  addButton: {
    backgroundColor: "#2E5BBA",
    padding: 10,
    marginLeft: 10,
    borderRadius: 8,
  },

  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
  },

  taskText: {
    flex: 1,
    fontSize: 16,
  },
});
