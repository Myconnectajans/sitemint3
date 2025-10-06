import Link from "next/link";
import React from "react";

const CopyrightText = () => {
  return (
    <p>
      Telif Hakkı © {new Date().getFullYear()} <Link href="/">Harri</Link> {' '}
      Tüm hakları saklıdır.
    </p>
  );
};

export default CopyrightText;
