import { Item } from "./models/item";
import { MAX_QUALITY, MIN_QUALITY } from "./constants";

export function increaseQuality(item: Item, amount = 1) {
  item.quality = Math.min(MAX_QUALITY, item.quality + amount);
}

export function decrementQuality(item: Item, amount = 1) {
  item.quality = Math.max(MIN_QUALITY, item.quality - amount);
}

export function decrementSellIn(item: Item) {
  item.sellIn -= 1;
}

export function isExpired(item: Item) {
  return item.sellIn < 0;
}
