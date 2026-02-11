import { SULFURAS_QUALITY } from "../constants/quality";
import { Sulfuras } from "@/models/Sulfuras";

export function updateSulfuras(item: Sulfuras): void {
  item.quality = SULFURAS_QUALITY;
}
