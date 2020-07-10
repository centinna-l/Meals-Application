import React from "react";
import {View, Text} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../Components/MealList";

const CategoryMealsScreen = (props) => {
  const catID = props.navigation.getParam("categoryID");
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );
  if (displayedMeals.length <= 0 || !displayedMeals) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Text>No Items!!</Text>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  //console.log(navigationData);
  const catID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
