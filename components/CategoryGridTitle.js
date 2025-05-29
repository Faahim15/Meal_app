import { View, Text, Pressable } from "react-native";

export default function CategoryGridTitle({ title, color, onPress }) {
  return (
    <View className="flex-1 m-4  h-[150px] shadow-md ">
      <Pressable
        style={{ backgroundColor: color }}
        onPress={onPress}
        className="flex-1 justify-center items-center rounded-lg "
      >
        <View className="">
          <Text className="font-bold text-lg">{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
//className="flex-1 rounded-lg  items-center justify-center"
