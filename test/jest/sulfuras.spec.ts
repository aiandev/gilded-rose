import { SULFURAS_QUALITY } from '@/constants';
import { GildedRose } from '@/gilded-rose';
import { Item } from '@/models/item';

describe('Sulfuras', () => {
  it('should never decrease in quality or sellIn', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, SULFURAS_QUALITY)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].sellIn).toBe(5);
    expect(items[0].quality).toBe(SULFURAS_QUALITY);
  });

  it('should maintain quality of 80 even after sell date', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, SULFURAS_QUALITY)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(SULFURAS_QUALITY);
  });
});
