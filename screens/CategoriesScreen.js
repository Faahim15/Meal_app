import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTitle from "../components/CategoryGridTitle";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealsOverView", {
        categoryId: item.id,
      });
    }
    return (
      <CategoryGridTitle
        onPress={pressHandler}
        title={item.title}
        color={item.color}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
