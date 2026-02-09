import { Item, GildedRose } from '@/gilded-rose';

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
