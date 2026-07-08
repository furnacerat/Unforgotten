import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/content";

export default function ShopPreviewPage() {
  return (
    <PageShell
      eyebrow="Shop Preview"
      title="The first collection is coming."
      intro="No checkout yet. No rush. Just an early view of the pieces being shaped around Chapter 01."
    >
      <section className="mx-auto max-w-7xl pb-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
