import { Item } from "@/models/item";
import { decrementQuality, decrementSellIn, isExpired } from "@/helper";

export function updateDefault(item: Item): void {
  decrementQuality(item);
  
  decrementSellIn(item);
  
  if (isExpired(item)) {
    decrementQuality(item);
  }
}
