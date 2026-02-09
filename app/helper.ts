import { Item } from "./gilded-rose";

export function isExpired(item: Item): boolean {
  return item.sellIn < 0;
}