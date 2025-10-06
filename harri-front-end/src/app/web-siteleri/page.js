import ShopMainArea from "@components/shop/shop-main-area";

export const metadata = {
  title: "Web Siteleri - Harri Shop",
};

export default async function WebSiteleriPage({searchParams}) {
  return <ShopMainArea searchParams={searchParams} hideFilters={true} isWebSite={true} />;
}
