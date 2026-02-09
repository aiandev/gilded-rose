import { Item } from "@/gilded-rose";
import { MAX_QUALITY } from "../constants/quality";
import { decrementSellIn, increaseQuality, isExpired } from "@/helper";

export function updateAgedBrie(item: Item): void {
  increaseQuality(item);

  decrementSellIn(item);

  if (isExpired(item)) {
    increaseQuality(item);
  }
}
