import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RestaurantMenu from "./RestaurantMenu";
import TopPicks from "./TopPicks";

const Restaurant = () => {
  const { id } = useParams();
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, [id]);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4415822&lng=78.3754448&restaurantId=${id}`
      );
      const data = await response.json();
      setResData(data.data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  return (
    <div className="mx-25">
      <h1 className="text-3xl font-bold my-6">
        {resData?.cards?.[0]?.card?.card?.text}
      </h1>

      <div className="mb-10">
        <TopPicks
          topPickItems={resData.cards?.[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
            (menu) =>
              menu.card.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
          )}
        />
      </div>

      <div>
        <RestaurantMenu
          resMenu={resData.cards?.[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
            (menu) =>
              menu.card.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )}
        />
      </div>
    </div>
  );
};

export default Restaurant;
