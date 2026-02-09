import { Item } from "@/gilded-rose";
import { MAX_QUALITY } from "../constants/quality";
import { isExpired } from "@/helper";

export function updateAgedBrie(item: Item): void {
  item.quality = Math.min(MAX_QUALITY, item.quality + 1);
  item.sellIn--;

  if (isExpired(item)) {
    item.quality = Math.min(MAX_QUALITY, item.quality + 1);
  }
}
