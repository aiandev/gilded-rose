import { MIN_QUALITY } from '@/constants';
import { GildedRose } from '@/gilded-rose';
import { Item } from '@/models/item';

describe('Default Items', () => {
  let gildedRose: GildedRose;
  
  beforeEach(() => {
    gildedRose = new GildedRose([new Item('Default Item', 5, 10)]);
  });

  it('should decrease quality and sellIn by 1 each day', () => {
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(9);
  });

  //Once the sell by date has passed, Quality degrades twice as fast
  it('should decrease quality by 2 when sell date has passed', () => {
    const gildedRose = new GildedRose([new Item('Default Item', 0, 10)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(8); 
  });

  // The Quality of an item is never negative
  it('should never have negative quality', () => {
    const gildedRose = new GildedRose([new Item('Default Item', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(MIN_QUALITY);
  });
});
