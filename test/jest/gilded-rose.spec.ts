// Import all product-specific test suites and item model tests
import './default-items.spec';
import './aged-brie.spec';
import './sulfuras.spec';
import './backstage-passes.spec';
import './conjured-items.spec';

describe('Gilded Rose - All Products', () => {
  it('should run all product-specific test suites', () => {
    // This test ensures all product test files are executed
    expect(true).toBe(true);
  });
});
