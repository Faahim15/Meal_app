import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function IconButton({ onPress, icon, color }) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons onPress={onPress} name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
