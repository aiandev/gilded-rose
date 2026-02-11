
import { Item } from "@/gilded-rose";
import { itemNames } from "@/constants";
import { updateAgedBrie, updateBackstage, updateConjured, updateDefault, updateSulfuras } from "@/updaters";

type Updater = (item: Item) => void;
type ItemName = typeof itemNames[keyof typeof itemNames];

const registry: Record<ItemName, Updater> = {
  [itemNames.SULFURAS]: updateSulfuras,
  [itemNames.AGED_BRIE]: updateAgedBrie,
  [itemNames.BACKSTAGE]: updateBackstage,
  [itemNames.CONJURED]: updateConjured,
};

export function updateItem(item: Item): void {
  const updater = registry[item.name.trim() as ItemName] ?? updateDefault;
  updater(item);
}
