import { itemNames, MAX_QUALITY, MIN_QUALITY } from "./constants";
import { updateItem } from "./factory/quality-updater-factory";
import { isExpired } from "./helper";

export class Item {
  name: string;
  sellIn: number;
  quality: number;
  /** validate quality not negative and not more than 50, except for Sulfuras which is always 80 
  I didn't touch it becuase the requirment asked me don't update item or items */
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}


export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
       updateItem(this.items[i]);
    }

    return this.items;
  }
}
