import { Item } from "@/gilded-rose";
import { MIN_QUALITY } from "../constants/quality";
import { isExpired } from "@/helper";

export function updateDefault(item: Item): void {
  item.quality = Math.max(MIN_QUALITY, item.quality - 1);
  
  item.sellIn--;
  if (isExpired(item)) {
    item.quality = Math.max(MIN_QUALITY, item.quality - 1);
  }
}
