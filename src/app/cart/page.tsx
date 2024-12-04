"use client";

import { usePathname, useSearchParams } from "next/navigation";

const CartPage = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  console.log(searchParams.get("search"), searchParams.get("random"));
  //   console.log(searchParams.getAll());
  return <div>CartPage</div>;
};

export default CartPage;
