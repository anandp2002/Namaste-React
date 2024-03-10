import { FETCH_MENU_API } from '../config';
import { getRecommendedList, checkJsonData2 } from '../utils/helper';
import { useState, useEffect } from 'react';

export default function useRestaurant(resId) {
  const [recommended, setRecommended] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_API + resId);
    const json = await data.json();
    let result = checkJsonData2(json);
    setRestaurant(result);

    let recommendedItems = getRecommendedList(json);
    setRecommended(recommendedItems);
  }

  return [restaurant, recommended];
}
