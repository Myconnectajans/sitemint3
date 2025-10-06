import ShopMainArea from "@components/shop/shop-main-area";

export const metadata = {
  title: "QR Menüler - Harri Shop",
};

export default async function QRMenulerPage({searchParams}) {
  return <ShopMainArea searchParams={searchParams} hideFilters={true} isQRMenu={true} />;
}
