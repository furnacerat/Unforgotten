import { EditorialProductPage } from "@/components/product/EditorialProductPage";
import { productDetails } from "@/lib/productDetails";

export default function LanternHatPage() {
  return <EditorialProductPage product={productDetails["the-lantern-hat"]} />;
}
