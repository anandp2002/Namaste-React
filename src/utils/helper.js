export function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return filteredData;
}

export function checkJsonData(jsonData) {
  for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
    let checkData =
      jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    if (checkData !== undefined) {
      return checkData;
    }
  }
}

export function checkJsonData2(jsonData) {
  for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    let checkData = jsonData?.data?.cards[i]?.card?.card?.info;

    if (checkData !== undefined) {
      return checkData;
    }
  }
}

export function getRecommendedCardIndex(jsonData) {
  for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    let RecommendedCard =
      jsonData?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR;

    if (RecommendedCard !== undefined) {
      return i;
    }
  }
}

export function getRecommendedList(jsonData) {
  var cardIndex = getRecommendedCardIndex(jsonData);

  for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    let RecommendedList =
      jsonData?.data?.cards[cardIndex]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[i]?.card?.card?.itemCards;

    if (RecommendedList !== undefined) {
      return RecommendedList;
    }
  }
}
