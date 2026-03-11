"use client";

import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/ui/CartDrawer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
