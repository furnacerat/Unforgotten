import { EditorialProductPage } from "@/components/product/EditorialProductPage";
import { productDetails } from "@/lib/productDetails";

export default function ValleyTeePage() {
  return <EditorialProductPage product={productDetails["the-valley-tee"]} />;
}
