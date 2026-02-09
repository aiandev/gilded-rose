import { Item } from "@/gilded-rose";
import { MAX_QUALITY } from "../constants/quality";
import { isExpired } from "@/helper";

export function updateBackstage(item: Item): void {
  let increase = 1;

  if (item.sellIn <= 5) increase = 3;
  else if (item.sellIn <= 10) increase = 2;

  item.quality = Math.min(MAX_QUALITY, item.quality + increase);
  
  item.sellIn--;
  if (isExpired(item)) {
    item.quality = 0;
  }
}
