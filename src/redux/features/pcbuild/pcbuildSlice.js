import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  processor: {
    id: 0,
    name: "",
    price: 0,
    image: "",
  },
  gpu: {
    id: 0,
    name: "",
    price: 0,
    image: "",
  },
  ram: {
    id: 0,
    name: "",
    price: 0,
    image: "",
  },
  motherboard: {
    id: 0,
    name: "",
    price: 0,
    image: "",
  },
  storagedevice: {
    id: 0,
    name: "",
    price: 0,
    image: "",
  },
  powersupplyunit: {
    id: 0,
    name: "",
    price: 0,
    image: "",
  },
  monitor: {
    id: 0,
    name: "",
    price: 0,
    image: "",
  },
  others: {
    id: 0,
    name: "",
    price: 0,
    image: "",
  },
  total: 0,
  qty: 0,
};
const pcbuildSlice = createSlice({
  name: "pcbuild",
  initialState,
  reducers: {
    // Action to add a component to the PC build
    addComponent: (state, action) => {
      // Extract component details from the action payload
      let { id, name, price, category, image } = action.payload;

      // Normalize category names (remove spaces and make lowercase)
      category = category?.replace(/\s+/g, "");
      category = category?.toLowerCase();

      // Check if the component with the same ID is already in the state
      if (state[category]?.id !== id) {
        if (state[category]?.name && state[category]?.price) {
          state.total -= state[category].price;
          state.qty -= 1;
        }

        // Update the state with the new component
        state[category] = { id, name, price, image };
        state.total += price;
        state.qty += 1;
        //
      }
    },
    // Action to clear the entire PC build
    clearComponent: (state) => {
      // Reset all components and totals to their initial values
      state.processor = {
        id: 0,
        name: "",
        price: 0,
        image: "",
      };
      state.gpu = {
        id: 0,
        name: "",
        price: 0,
        image: "",
      };
      state.ram = {
        id: 0,
        name: "",
        price: 0,
        image: "",
      };
      state.motherboard = {
        id: 0,
        name: "",
        price: 0,
        image: "",
      };
      state.storagedevice = {
        id: 0,
        name: "",
        price: 0,
        image: "",
      };
      state.powersupplyunit = {
        id: 0,
        name: "",
        price: 0,
        image: "",
      };
      state.monitor = {
        id: 0,
        name: "",
        price: 0,
        image: "",
      };
      state.others = {
        id: 0,
        name: "",
        price: 0,
        image: "",
      };
      state.total = 0;
      state.qty = 0;
    },
    clearComponentByCategory: (state, action) => {
      let category = action.payload;
      category = category.replace(/\s+/g, "");
      category = category.toLowerCase();
      state[category] = {
        id: 0,
        name: "",
        price: 0,
        image: "",
      };
      state.total -= state[category].price;
      state.qty -= 1;
    },
  },
});

export const { addComponent, clearComponent, clearComponentByCategory } =
  pcbuildSlice.actions;
export default pcbuildSlice.reducer;
