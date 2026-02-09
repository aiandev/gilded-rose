import { MAX_QUALITY } from '@/constants';
import { GildedRose } from '@/gilded-rose';
import { Item } from '@/models/item';

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
    
    expect(items[0].quality).toBe(MAX_QUALITY);
  });
});
