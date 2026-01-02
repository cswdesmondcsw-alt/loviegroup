// import cogoToast from 'cogo-toast';
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: []
    },
    reducers: {
        addToWishlist(state, action) {
            const isInWishlist = state.wishlistItems.findIndex(item => item.id === action.payload.id);
            if (isInWishlist > -1) {
                // cogoToast.info("Product already in wishlist", {position: "bottom-left"});
                toast("Product already in wishlist", {
                    type: "info",
                    position: "bottom-left"
                })
            } else {
                state.wishlistItems.push(action.payload);
                // cogoToast.success("Added To wishlist", {position: "bottom-left"});
                toast("Added To wishlist", {
                    type: "success",
                    position: "bottom-left"
                })
            }

        },
        deleteFromWishlist(state, action) {
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
            // cogoToast.error("Removed From Wishlist", {position: "bottom-left"});
            toast("Removed From Wishlist", {
                type: "error",
                position: "bottom-left"
            })
        },
        deleteAllFromWishlist(state) {
            state.wishlistItems = []
        }
    },
});

export const { addToWishlist, deleteFromWishlist, deleteAllFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
