import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute(); //can be used for route.params as well
  //note! route.params is the object {categoryId: itemData.item.id} in MealsOverviewScreen
  //note!! rather, from the navigation.navigate "categoryId: itemData.item.id" in CategoriesScreen
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    // console.log(mealItem.categoryIds.indexOf(catId) + " is the return value from index")
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    //alternative for getting the id for the header within this screen
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId,navigation]);

  return <MealsList items={displayedMeals}/>
}

export default MealsOverviewScreen;


