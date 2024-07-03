"use client";

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import React, { useEffect } from "react";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <p className="text-heading4-bold text-green-700">Successful Payment</p>
      <p>Thank you for your purchase</p>
      <Link
        href="/"
        className="p-4 border rounded-lg text-base-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black "
      >
        CONTINUE TO SHOPPING
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
