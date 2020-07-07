import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../Components/MealItem";
import MealList from "../Components/MealList";

const CategoryMealsScreen = (props) => {
  
  const catID = props.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );
  return (
  <MealList listData={displayMeals} navigation={props.navigation}/>
  );
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
