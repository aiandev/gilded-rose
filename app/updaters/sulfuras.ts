import { Item } from "@/models/item";
import { SULFURAS_QUALITY } from "../constants/quality";

export function updateSulfuras(item: Item): void {
  item.quality = SULFURAS_QUALITY;
}
