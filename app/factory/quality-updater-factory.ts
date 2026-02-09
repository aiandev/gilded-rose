
import { Item } from "@/gilded-rose";
import { itemNames } from "@/constants";
import { updateAgedBrie, updateBackstage, updateConjured, updateDefault, updateSulfuras } from "@/updaters";

type Updater = (item: Item) => void;

const registry: Record<string, Updater> = {
  [itemNames.SULFURAS]: updateSulfuras,
  [itemNames.AGED_BRIE]: updateAgedBrie,
  [itemNames.BACKSTAGE]: updateBackstage,
  [itemNames.CONJURED]: updateConjured,
};

export function updateItem(item: Item): void {
  const updater = registry[item.name.trim()] ?? updateDefault;
  updater(item);
}
