import React from "react";
import { useRouter } from "next/navigation";
// internal
import ShopFilterPanel from "../../shop-filtering/shop-filter-panel";
import ShopModel from "../../shop-filtering/shop-model";
import ShopColor from "../../shop-filtering/shop-color";
import ShopPrice from "../../shop-filtering/shop-price";

const ShopSidebar = ({ all_products }) => {
  const router = useRouter();
  const handleReset = () => {
    router.push("/shop");
  };
  return (
    <div className={`shop__sidebar on-left`}>
      <div className="shop__widget tp-accordion">
        <ShopFilterPanel all_products={all_products} />
      </div>
    </div>
  );
};

export default ShopSidebar;
