import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import HeaderButton from "../Components/HeaderButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../Constants/Color";
import CategoryGridTile from "../Components/CategoryGridTile";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryID: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <View>
      <View style={styles.flatList}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
      </View>
      <View style={styles.footer}>
        <Text>Made with </Text>
        <FontAwesome name="heart" size={15} color="red" />
      <Text> by Jerry </Text>
      </View>
    </View>
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Categories",
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
  footer:{
    flexDirection: "row",
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  },
  flatList:{
    height: "96%"
  }
});

export default CategoriesScreen;
