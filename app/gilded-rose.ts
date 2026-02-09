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

const Max_QUALITY = 50;
const Min_QUALITY = 0;

const productsNames = {
  AGED_BRIE: "Aged Brie",
  SULFURAS: "Sulfuras, Hand of Ragnaros",
  BACKSTAGE_PASSES: "Backstage passes to a TAFKAL80ETC concert"
}


export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      if (this.items[i].name == productsNames.SULFURAS) {
        continue;
      }

      this.updateQualityItem(this.items[i]);
    
      // decrease sellIn for all items except Sulfuras which already ignored at the beginning of the loop
      this.items[i].sellIn = this.items[i].sellIn - 1;

      if (this.isExpired(this.items[i])) {
        this.updateQualityExpiredItem(this.items[i]);
      }
    }

    return this.items;
  }

  isExpired(item: Item): boolean {
    return item.sellIn < 0;
  }

  updateQualityItem(item: Item) {
    if (item.name == productsNames.SULFURAS) {
      return;
    }

    const increasingQualityItems = [
      productsNames.AGED_BRIE,
      productsNames.BACKSTAGE_PASSES,
    ];

    if (increasingQualityItems.includes(item.name)) {
        
      item.quality = Math.min(item.quality + 1, Max_QUALITY);

      if (item.name == productsNames.BACKSTAGE_PASSES) {
        if (item.sellIn < 11) {
          item.quality = Math.min(item.quality + 1, Max_QUALITY);
        }
        if (item.sellIn < 6) {
          item.quality = Math.min(item.quality + 1, Max_QUALITY); 
        }
      }
    } else { 
      item.quality = Math.max(item.quality - 1, Min_QUALITY);
    }
  }

  updateQualityExpiredItem(item: Item) {
    if(item.name == productsNames.SULFURAS ||  this.isExpired(item) == false){
      return;
    }
    if (item.name == productsNames.AGED_BRIE) {
      item.quality = Math.min(item.quality + 1, Max_QUALITY);
    } else {
      if (item.name == productsNames.BACKSTAGE_PASSES) {
        item.quality = Min_QUALITY;
      } else {
        item.quality = Math.max(item.quality - 1, Min_QUALITY);
      }
    }
  }
  
}
