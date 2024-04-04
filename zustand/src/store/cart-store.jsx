import { create } from 'zustand'
import { cartItems } from '../cart-items'
import { createSelectors } from './createSelector';

export const useCartStore = create((set) => ({
    cartItems: cartItems,
    totalNumberOfItems: 0,
    totalAmount: 0,
    clearCart: () => set(() => ({ cartItems: [] })),
    setTotalAmount: () => set((state) => ({
        totalAmount: state?.cartItems.reduce((total, item) => {
            return total + (item.price * item.amount);
        }, 0)
    })),
    setTotalNumberOfItems: () => set((state) => ({
        totalNumberOfItems: state?.cartItems.reduce((total, item) => {
            return total + item.amount;
        }, 0)
    })),
    increment: (itemId) => {
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id == itemId ? { ...item, amount: item.amount + 1 } : item
            )
        }));

    },
    decrement: (itemId) => {
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === itemId ? { ...item, amount: item.amount - 1 } : item
            ).filter(item => item.amount > 0)
        }))
    },
    removeItem: (itemId) => set((state) => ({ cartItems: state?.cartItems?.filter(item => itemId !== item.id) }))
}))

export const useCartStoreSelector = createSelectors(useCartStore)