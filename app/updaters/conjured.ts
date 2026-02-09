import { Item } from "@/models/item";
import { decrementQuality, decrementSellIn, isExpired } from "@/helper";

export function updateConjured(item: Item): void {

  decrementSellIn(item);
  if (isExpired(item)) {
    decrementQuality(item, 2);
  }else{
    decrementQuality(item, 1);
  }
}
