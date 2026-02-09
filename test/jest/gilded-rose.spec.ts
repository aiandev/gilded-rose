import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  describe('Normal Items', () => {
    let gildedRose: GildedRose;
    
    beforeEach(() => {
      gildedRose = new GildedRose([new Item('Normal Item', 5, 10)]);
    });

    it('should decrease quality and sellIn by 1 each day', () => {
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(9);
    });

    //Once the sell by date has passed, Quality degrades twice as fast
    it('should decrease quality by 2 when sell date has passed', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 0, 10)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(8); 
    });

    // The Quality of an item is never negative
    it('should never have negative quality', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });

  describe('Aged Brie', () => {
    // "Aged Brie" actually increases in Quality the older it gets
    it('should increase in quality as it gets older', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 5, 10)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(11);
    });

    // Once the sell by date has passed, Quality degrades twice as fast
    it('should increase quality by 2 after sell date', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 0, 10)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(12); // +1 before sell date, +1 after sell date
    });

    //The Quality of an item is never negative
    it('should never exceed quality of 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(50);
    });
    
  });

  describe('Sulfuras', () => {
    it('should never decrease in quality or sellIn', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(5);
      expect(items[0].quality).toBe(80);
    });

    it('should maintain quality of 80 even after sell date', () => {
      const initQuality = 80; 
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, initQuality)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(initQuality);
    });
  });

  describe('Backstage Passes', () => {
    it('should increase quality by 1 when more than 10 days left', () => {
      const initQuality = 10; 
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, initQuality)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(initQuality +1);
    });
	  // - `Quality` increases by `2` when there are `10` days or less 
    it('should increase quality by 2 when 10 days or less', () => {
      const initQuality = 10
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, initQuality)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(initQuality +2); 
    });

    // and by `3` when there are `5` days or less but
    it('should increase quality by 3 when 5 days or less', () => {
      const initQuality = 10
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, initQuality)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(initQuality +3); 
    });

    it('should drop to 0 quality after the concert', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
      const items = gildedRose.updateQuality();
      
      expect(items[0].quality).toBe(0);
    });
  });
});
