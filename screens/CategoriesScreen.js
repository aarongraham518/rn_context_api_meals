import { FlatList, View, Text } from "react-native";
import CategoryGridTile from "../components/CategoriyGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  
  function renderCategoryItem(itemData) {
    
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    //outputs the individual tiles
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
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
    // <View>
    //   {CATEGORIES.map((item) => (
    //     <Text>{item.id}</Text>
    //   ))}
    // </View>
  );
}

export default CategoriesScreen;
