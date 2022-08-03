import { createContext, useContext } from "react"
import {useCart} from './useCart'

type CartContextValue = ReturnType<typeof useCart>

export const CartContext = createContext({} as CartContextValue)

interface CartProviderProps {
  useCartHook?: typeof useCart;
}

export const CartProvider = ({ children }: React.PropsWithChildren<CartProviderProps>) => {
  const value = useCart()

  return (
    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
