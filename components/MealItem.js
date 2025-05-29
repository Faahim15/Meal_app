import { View, Text, Pressable, Image, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({
  title,
  imageUrl,
  affordability,
  duration,
  complexity,
  id,
}) {
  const navigation = useNavigation();
  function mealDetailsHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }

  return (
    <View className="bg-white m-4 rounded-lg shadow-md ">
      <Pressable onPress={mealDetailsHandler}>
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
        <Button title="View details" />
      </Pressable>
    </View>
  );
}
