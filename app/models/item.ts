import { itemNames, MAX_QUALITY, MIN_QUALITY, SULFURAS_QUALITY } from "@/constants";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    /**
     * Validate quality not negative and not more than 50, except for Sulfuras which is always 80.
     * Throws error if invalid quality is passed.
     */
    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;

        if (itemNames.SULFURAS === name) {
            if (quality !== SULFURAS_QUALITY) {
                throw new Error(`Sulfuras quality must be exactly ${SULFURAS_QUALITY}, received ${quality}`);
            }
            this.quality = SULFURAS_QUALITY;
        } else {
            if (quality < MIN_QUALITY || quality > MAX_QUALITY) {
                throw new Error(`Quality must be between ${MIN_QUALITY} and ${MAX_QUALITY}, received ${quality}`);
            }
            this.quality = quality;
        }
    }
}