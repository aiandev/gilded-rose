import { Item } from "@/gilded-rose";
import { SULFURAS_QUALITY } from "../constants/quality";

export function updateSulfuras(item: Item): void {
  item.quality = SULFURAS_QUALITY;
}
