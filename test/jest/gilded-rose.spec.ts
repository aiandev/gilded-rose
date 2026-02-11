import { Item, GildedRose } from '@/gilded-rose';
import { itemNames } from '@/constants';

describe('GildedRose', () => {
  
  describe('constructor', () => {
    it('should initialize with empty array when no items provided', () => {
      const gildedRose = new GildedRose();
      expect(gildedRose.items).toEqual([]);
    });

    it('should initialize with provided items', () => {
      const items = [new Item('Test', 1, 1)];
      const gildedRose = new GildedRose(items);
      expect(gildedRose.items).toBe(items);
    });
  });

  describe('updateQuality', () => {
    it('should return the items array', () => {
      const items = [new Item('Test', 1, 1)];
      const gildedRose = new GildedRose(items);
      const result = gildedRose.updateQuality();
      
      expect(result).toBe(items);
      expect(result).toBe(gildedRose.items);
    });
    // make sure called updateQuality on each item
    it('should call updateItem for each item', () => {
        const updateItemSpy = jest.spyOn(require('@/registry/updater-selector'), 'updateItem');
        const items = [new Item('Test', 1, 1), new Item('Test2', 2, 2)];
        const gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        expect(updateItemSpy).toHaveBeenCalledTimes(items.length);
        updateItemSpy.mockRestore();
    });

    it('should process normal items correctly', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 5, 10)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(9);
    });

    it('should process multiple items', () => {
      const gildedRose = new GildedRose([
        new Item('Item1', 5, 10),
        new Item('Item2', 3, 8),
        new Item('Item3', 1, 6)
      ]);
      
      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(9);
      expect(items[1].quality).toBe(7);
      expect(items[2].quality).toBe(5);
    });

    it('should handle special items correctly', () => {
      const gildedRose = new GildedRose([
        new Item(itemNames.AGED_BRIE, 5, 10),
        new Item(itemNames.SULFURAS, 5, 80),
        new Item(itemNames.BACKSTAGE, 15, 10),
        new Item(itemNames.CONJURED, 5, 10)
      ]);
      
      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(11); // Aged Brie increases
      expect(items[1].quality).toBe(80); // Sulfuras unchanged
      expect(items[2].quality).toBe(11); // Backstage increases
      expect(items[3].quality).toBe(8);  // Conjured decreases by 2
    });

    it('should handle empty items array', () => {
      const gildedRose = new GildedRose([]);
      const items = gildedRose.updateQuality();
      
      expect(items).toEqual([]);
    });

    it('should handle multiple update cycles', () => {
      const gildedRose = new GildedRose([new Item('Test', 5, 10)]);
      
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(9);
      expect(items[0].sellIn).toBe(4);
      
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(8);
      expect(items[0].sellIn).toBe(3);
    });

    it('should handle items with expired sell dates', () => {
      const gildedRose = new GildedRose([new Item('Expired Item', 0, 10)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(8); // Quality decreases by 2 after expiry
    });

    it('should respect quality boundaries', () => {
      const gildedRose = new GildedRose([
        new Item('Zero Quality', 5, 0),
        new Item(itemNames.AGED_BRIE, 5, 50)
      ]);
      
      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(0);  // Cannot go below 0
      expect(items[1].quality).toBe(50); // Cannot go above 50 (except Sulfuras)
    });

    it('should handle items with whitespace in names', () => {
      const gildedRose = new GildedRose([
        new Item('  Normal Item  ', 5, 10),
        new Item(`  ${itemNames.AGED_BRIE}  `, 5, 10)
      ]);
      
      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(9);  // Treated as normal
      expect(items[1].quality).toBe(11); // Treated as Aged Brie (trimmed)
    });
  });

  describe('Item class', () => {
    it('should create item with correct properties', () => {
      const item = new Item('Test Item', 10, 20);
      
      expect(item.name).toBe('Test Item');
      expect(item.sellIn).toBe(10);
      expect(item.quality).toBe(20);
    });

    it('should handle constructor parameters of any type', () => {
      const item = new Item('Test', '5', '15');
      
      expect(item.name).toBe('Test');
      expect(item.sellIn).toBe('5');
      expect(item.quality).toBe('15');
    });
  });
});