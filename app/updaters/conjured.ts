import { Item } from "@/gilded-rose";
import { decrementQuality, decrementSellIn, isExpired } from "@/helper";

export function updateConjured(item: Item): void {
  decrementQuality(item, 2);

  decrementSellIn(item);
  if (isExpired(item)) {
    decrementQuality(item, 2);
  }
}
