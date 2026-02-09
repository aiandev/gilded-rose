import { MIN_QUALITY } from '@/constants';
import { Item, GildedRose } from '@/gilded-rose';

describe('Conjured Items', () => {
  it('should degrade in quality twice as fast as normal items', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 5, 10)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(8);
  });

  it('should degrade by 4 after sell date', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 0, 10)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(6);
  });

  it('should never have negative quality', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 0, 0)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(MIN_QUALITY);
  });
});
