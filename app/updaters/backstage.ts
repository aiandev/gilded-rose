import { Item } from "@/gilded-rose";
import { MAX_QUALITY } from "../constants/quality";
import { isExpired } from "@/helper";
import { BACKSTAGE_TIER_1, BACKSTAGE_TIER_2 } from "@/constants";

export function updateBackstage(item: Item): void {
  let increase = 1;

  if (item.sellIn <= BACKSTAGE_TIER_2) increase = 3;
  else if (item.sellIn <= BACKSTAGE_TIER_1) increase = 2;

  item.quality = Math.min(MAX_QUALITY, item.quality + increase);
  
  item.sellIn--;
  if (isExpired(item)) {
    item.quality = 0;
  }
}
