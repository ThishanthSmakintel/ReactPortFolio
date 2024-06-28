import { createSlice } from "@reduxjs/toolkit";
const initialStateData = [];

export const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateData,
  reducers:{
     addCustomer(state,action){
        state.push(action.payload);
     }
  }
});

export const {addCustomer}=customerSlice.actions //action createer 
export default customerSlice.reducer// reducer function