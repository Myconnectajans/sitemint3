import ShopMainArea from "@components/shop/shop-main-area";
import { supabase } from "@lib/supabaseClient";

export const metadata = {
  title: "Shop - Harri Shop",
};

export default async function ShopPage({ searchParams }) {
  // Supabase'den ürünleri çek
  const { data: products, error } = await supabase
    .from("products")
    .select("*");

  // Hata varsa ekrana yazdır
  if (error) {
    return <div>Ürünler alınırken hata oluştu: {error.message}</div>;
  }

  return (
    <ShopMainArea
      products={products || []}
      {...searchParams}
    />
  );
}
