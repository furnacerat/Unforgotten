import { EditorialProductPage } from "@/components/product/EditorialProductPage";
import { productDetails } from "@/lib/productDetails";

export default function ShepherdHoodiePage() {
  return (
    <EditorialProductPage product={productDetails["the-shepherd-hoodie"]} />
  );
}
