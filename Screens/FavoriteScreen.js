import React from "react";
import { View, Text } from "react-native";
import HeaderButton from "../Components/HeaderButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MealList from "../Components/MealList";
import { useSelector } from "react-redux";

const FavoriteScreen = (props) => {
  const favMeal = useSelector((state) => state.meals.favoriteMeals);
  if (favMeal.length <= 0 || !favMeal) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Text>No Favorite Meals Found. Try adding some!</Text>
      </View>
    );
  }
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
