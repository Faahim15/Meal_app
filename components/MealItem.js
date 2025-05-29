import { View, Text, Pressable, Image } from "react-native";
import React from "react";

export default function MealItem({
  title,
  imageUrl,
  affordability,
  duration,
  complexity,
}) {
  return (
    <View className="bg-white m-4 rounded-lg shadow-md ">
      <Pressable>
        <View>
          <Image
            className="h-[200px] w-[100%] rounded-lg bg-white "
            source={{ uri: imageUrl }}
          />
          <Text className="font-bold text-center text-lg">{title}</Text>
        </View>
        <View className="flex-row justify-center mt-1">
          <Text className=" text-lg mx-2">{duration}</Text>
          <Text className=" text-lg mx-2">{complexity.toUpperCase()}</Text>
          <Text className=" text-lg mx-2">{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}
