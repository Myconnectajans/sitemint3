import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ShopColor = ({ all_products }) => {
  const [isChecked, setIsChecked] = useState("");
  const searchParams = useSearchParams();
  const color = searchParams.get("color");
  const router = useRouter();
  const all_colors = all_products.map((prd) => prd.colors.map((c) => c));
  const colors = [...new Set(all_colors.flat())];
  // add extra palette options
  const extra = ['mor','turuncu','pembe','gri','kahverengi','mint','lacivert'];
  extra.forEach(c => { if (!colors.includes(c)) colors.push(c); });

  // handle brand
  const handleColors = (value) => {
    if (isChecked === value) {
      setIsChecked("");
      router.push(`/shop`);
    } else {
      setIsChecked(value);
      router.push(`/shop?color=${value.toLowerCase()}`);
    }
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="color__widget">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#color_widget_collapse"
          aria-expanded="true"
          aria-controls="color_widget_collapse"
        >
          Renk
        </button>
      </h2>
      <div
        id="color_widget_collapse"
        className="accordion-collapse collapse show"
        aria-labelledby="color__widget"
        data-bs-parent="#shop_color"
      >
        <div className="accordion-body">
          <div
            className="shop__widget-list"
            style={{ height: "180px", overflowY: "auto" }}
          >
            {colors.map((clr, i) => {
              const id = `c-${clr.replace(/\s+/g,'-')}-${i}`;
              return (
                <div key={i} className={`shop__widget-list-item-2 has-${clr}`}>
                  <input
                    type="checkbox"
                    id={id}
                    checked={
                      color === clr.toLowerCase() ? "checked" : false
                    }
                    readOnly
                  />
                  <label
                    onClick={() => handleColors(clr)}
                    htmlFor={id}
                    className="text-capitalize"
                  >
                    {clr}
                  </label>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopColor;
