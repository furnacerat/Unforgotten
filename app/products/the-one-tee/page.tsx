import { EditorialProductPage } from "@/components/product/EditorialProductPage";
import { productDetails } from "@/lib/productDetails";

export default function OneTeePage() {
  return <EditorialProductPage product={productDetails["the-one-tee"]} />;
}
