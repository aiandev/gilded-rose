import { Item } from "@/gilded-rose";
import { decrementQuality, decrementSellIn, isExpired } from "@/helper";

export function updateDefault(item: Item): void {
  decrementQuality(item);
  
  decrementSellIn(item);
  
  if (isExpired(item)) {
    decrementQuality(item);
  }
}
