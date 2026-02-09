import { updateItem } from "./factory/quality-updater-factory";
import { Item } from "./models/item";
export class GildedRose {
  items: Array<Item>;
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(updateItem);
    return this.items;
  }
}
