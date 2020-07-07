import React from "react";
import HeaderButton from "../Components/HeaderButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MealList from "../Components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = (props) => {
  const favMeal = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeal} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorties",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoriteScreen;
