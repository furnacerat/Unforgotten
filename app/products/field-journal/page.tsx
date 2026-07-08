import { EditorialProductPage } from "@/components/product/EditorialProductPage";
import { productDetails } from "@/lib/productDetails";

export default function FieldJournalPage() {
  return <EditorialProductPage product={productDetails["field-journal"]} />;
}
