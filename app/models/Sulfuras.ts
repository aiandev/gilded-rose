import { SULFURAS_QUALITY } from "@/constants";
import { Item } from "@/gilded-rose";

export class Sulfuras extends Item {
     constructor(sellIn:number) {
        super("Sulfuras, Hand of Ragnaros", sellIn, SULFURAS_QUALITY);
    }
}
