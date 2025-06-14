import { View, Text, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ navigation, route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId);
    if (categoryTitle) navigation.setOptions({ title: categoryTitle.title });
  }, [catId, navigation]);

  function renderMealItem({ item }) {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      id: item.id,
    };
    return <MealItem {...mealItemProps}></MealItem>;
  }
  return (
    <View className="flex-1 p-4">
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
