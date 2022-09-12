import { createContext, useState, useContext, ReactNode } from "react";

const CartContext = createContext<ICartProviderData>({} as ICartProviderData);

export const useCart = () => useContext(CartContext);

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ICartProps {
  children: ReactNode;
}

interface ICartProviderData {
  cart: IProduct[];
  addProduct: (product: IProduct) => void;
  deleteProduct: (productToDelete: IProduct) => void;
}

export function CartProvider({ children }: ICartProps) {
  const [cart, setCart] = useState<IProduct[]>([]);

  function addProduct(product: IProduct) {
    setCart([...cart, product]);
  }

  function deleteProduct(productToDeleted: IProduct) {
    const newCart = cart.filter(
      (product) => product.title !== productToDeleted.title
    );

    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
}
