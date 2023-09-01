import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPaymentMethods = createAsyncThunk(
  "payment/getPaymentMethods", 
  async () => {
    try {
      const response = await axios.get(
        "https://test.learnning.mohamedmansi.com/api/getPaymentMethods"
      );
      return response.data ;
    } catch (error) {
      console.error(error);
    }
});


export const postPayment = createAsyncThunk(
    "payment/postPayment", 
    async (values) => {
    const token = JSON.parse(localStorage.getItem('registerData')).token;
      try {
        const response = await axios.post(
          "https://test.learnning.mohamedmansi.com/api/payment" , 
          {
            order_id : values.order_id , 
            payment_method_id : values.payment_method_id ,
            currency:values.currency
          }, 
          { headers: {"Authorization" : token}} 
        );
        return response.data ;
      } catch (error) {
        console.error(error);
      }
  });

  


  export const paymentResponse = createAsyncThunk(
    "payment/paymentResponse", 
    async (values) => {
      try {
        const response = await axios.get(
          `https://test.learnning.mohamedmansi.com/api/successPayment?status=${values.status}&order_id=${values.order_id}&invoice_id=${values.invoice_id}` , 
        );
        return response.data ;
      } catch (error) {
        console.error(error);
      }
  });

  export const pricePackage = createAsyncThunk(
    "payment/pricePackage", 
    async () => {
      try {
        const response = await axios.get(
          "https://test.learnning.mohamedmansi.com/api/getPricePackages" 
        );
        return response.data ;
      } catch (error) {
        console.error(error);
      }
  });

  export const renewal = createAsyncThunk(
    "payment/renewal", 
    async (values) => {
    const token = JSON.parse(sessionStorage.getItem('userData')).token;
      try {
        const response = await axios.post(
          "https://test.learnning.mohamedmansi.com/api/renewal" , 
          {
            order_id : values.order_id , 
            payment_method_id : values.payment_method_id ,
            projecets : values.projecets,
            research : values.research,
            currency:values.currency
          }, 
          { headers: {"Authorization" : token}} 
        );
        return response.data ;
      } catch (error) {
        console.error(error);
      }
  });
const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    paymentMethods: {},
    postPaymentResponse: {},
    PaymentResponse: {},
    pricePackageResponse: {},
    renewalResponse: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPaymentMethods.fulfilled, (state, action) => {
        state.paymentMethods = action.payload;
      })
      .addCase(postPayment.fulfilled, (state, action) => {
        state.postPaymentResponse = action.payload;
      })
      .addCase(paymentResponse.fulfilled, (state, action) => {
        state.PaymentResponse = action.payload;
      })
      .addCase(pricePackage.fulfilled, (state, action) => {
        state.pricePackageResponse = action.payload;
      })
      .addCase(renewal.fulfilled, (state, action) => {
        state.renewalResponse = action.payload;
      })
  }
});



export default paymentSlice.reducer;