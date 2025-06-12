import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    else {
        return [];
    }
}

const initialState = {
    products: getBasketFromStorage(),
    drawer: false

}


const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}



export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id)
            if (findProduct) {
                const extractProduct = state.products.filter((product) => product.id != action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [...extractProduct, findProduct];
                writeFromBasketToStorage(state.products);
            } else {
                state.products = [...state.products, action.payload];
                writeFromBasketToStorage(state.products);
            }
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },

        // ürün Silme İşlemi Yapılacak
        // deleteBasketToStorage: (state) => {
        //     const DeletedProduct = state.products && state.products.find((product) => product.id === action.payload.id)
        //     if (DeletedProduct) {
        //         const extractProduct = 
        //     }
        // }
    }
})


export const { addToBasket, setDrawer } = basketSlice.actions

export default basketSlice.reducer