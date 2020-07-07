import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import HeaderButton from "../Components/HeaderButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Filters Screen </Text>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters",
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
