import { Item } from "./gilded-rose";
import { MAX_QUALITY, MIN_QUALITY } from "./constants";

export function increase(item: Item, amount = 1) {
  item.quality = Math.min(MAX_QUALITY, item.quality + amount);
}

export function decrease(item: Item, amount = 1) {
  item.quality = Math.max(MIN_QUALITY, item.quality - amount);
}

export function decSellIn(item: Item) {
  item.sellIn -= 1;
}

export function isExpired(item: Item) {
  return item.sellIn < 0;
}
