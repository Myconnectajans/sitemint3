import ShopMainArea from "@components/shop/shop-main-area";

export const metadata = {
  title: "Kartvizitler - Harri Shop",
};

export default async function KartvizitlerPage({searchParams}) {
  return <ShopMainArea searchParams={searchParams} hideFilters={true} isBusinessCard={true} />;
}
