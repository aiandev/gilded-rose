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

      if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
        continue;
      }

      const itemsToIncrease = [
        "Aged Brie",
        "Backstage passes to a TAFKAL80ETC concert",
      ];

      if (itemsToIncrease.includes(this.items[i].name)) {
        this.items[i].quality = Math.min(this.items[i].quality + 1, Max_QUALITY);
        if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
          if (this.items[i].sellIn < 11) {
            this.items[i].quality = Math.min(this.items[i].quality + 1, Max_QUALITY);
          }
          if (this.items[i].sellIn < 6) {
            this.items[i].quality = Math.min(this.items[i].quality + 1, Max_QUALITY); 
          }
        }
      } else {
        this.items[i].quality = Math.max(this.items[i].quality - 1, Min_QUALITY);
      }

      this.items[i].sellIn = this.items[i].sellIn - 1;

      // expired items
      if (this.isExpired(this.items[i])) {
        if (this.items[i].name == "Aged Brie") {
          this.items[i].quality = Math.min(this.items[i].quality + 1, Max_QUALITY);
        } else {
          if (
            this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            this.items[i].quality = Min_QUALITY;
          } else {
            this.items[i].quality = Math.max(this.items[i].quality - 1, Min_QUALITY);
          }
        }
      }
    }

    return this.items;
  }

  isExpired(item: Item): boolean {
    return item.sellIn < 0;
  }
  
}
