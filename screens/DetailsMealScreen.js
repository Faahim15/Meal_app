import { View, Text, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummyData";
import IconButton from "../components/IconButton";
export default function DetailsMealScreen({ navigation }) {
  const route = useRoute();

  const mealDetails = MEALS.find((meal) => meal.id === route.params.mealId);

  function headerButtonPressHandler() {
    console.log("pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <View className="p-4  bg-black">
      {mealDetails.steps.map((step, index) => (
        <Text
          key={index}
          style={{ color: "white" }}
          className="text-white text-lg "
        >
          {index + 1}. {step}
        </Text>
      ))}
    </View>
  );
}
