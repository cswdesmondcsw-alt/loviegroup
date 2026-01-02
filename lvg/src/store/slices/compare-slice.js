// import cogoToast from 'cogo-toast';
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const compareSlice = createSlice({
    name: "compare",
    initialState: {
        compareItems: []
    },
    reducers: {
        addToCompare(state, action) {
            state.compareItems.push(action.payload);
            // cogoToast.success("Added To compare", { position: "bottom-left" });
            toast("Added To compare", {
                position: "bottom-left",
                type: "success"
            })
        },
        deleteFromCompare(state, action) {
            state.compareItems = state.compareItems.filter(item => item.id !== action.payload);
            // cogoToast.error("Removed From Compare", { position: "bottom-left" });
            toast("Removed From Compare", {
                position: "bottom-left",
                type: "error"
            })
        }
    },
});

export const { addToCompare, deleteFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
