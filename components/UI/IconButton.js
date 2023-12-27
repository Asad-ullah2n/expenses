import { Pressable, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function IconButton({ name, color, size, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <AntDesign name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginVertical: 6,
    marginHorizental: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
