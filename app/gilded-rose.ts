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


  updateQualityItem(item: Item) {
    if (item.name == itemNames.SULFURAS) {
      return;
    }

    const increasingQualityItems = [
      itemNames.AGED_BRIE,
      itemNames.BACKSTAGE,
    ]

    if (increasingQualityItems.includes(item.name)) {
        
      item.quality = Math.min(item.quality + 1, MAX_QUALITY);

      if (item.name == itemNames.BACKSTAGE) {
        if (item.sellIn < 11) {
          item.quality = Math.min(item.quality + 1, MAX_QUALITY);
        }
        if (item.sellIn < 6) {
          item.quality = Math.min(item.quality + 1, MAX_QUALITY); 
        }
      }
    } else { 
      item.quality = Math.max(item.quality - 1, MIN_QUALITY);
    }
  }

  updateQualityExpiredItem(item: Item) {
    if(item.name == itemNames.SULFURAS ||  isExpired(item) == false){
      return;
    }
    if (item.name == itemNames.AGED_BRIE) {
      item.quality = Math.min(item.quality + 1, MAX_QUALITY);
    } else {
      if (item.name == itemNames.BACKSTAGE) {
        item.quality = MIN_QUALITY;
      } else {
        item.quality = Math.max(item.quality - 1, MIN_QUALITY);
      }
    }
  }
  
}
