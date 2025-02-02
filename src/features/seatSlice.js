import { createSlice } from "@reduxjs/toolkit";

const seatPrices = {
  silver: 100,
  gold: 150,
  platinum: 200,
};

const seatSlice = createSlice({
  name: "seats",
  initialState: {
    selectedSeats: [],
    bookedSeats: JSON.parse(localStorage.getItem("bookedSeats")) || [],
    totalCost: 0,
    error: "",
  },
  reducers: {
    selectSeats: (state, action) => {
      const { seat, row } = action.payload;
    
      if (state.selectedSeats.includes(seat)) {
       
        state.selectedSeats = state.selectedSeats.filter((s) => s !== seat);
        const seatPrice =
          row === "A"
            ? seatPrices.platinum
            : row === "B" || row === "C" || row === "D"
            ? seatPrices.gold
            : row === "E" || row === "F"
            ? seatPrices.silver
            : 0;
        state.totalCost -= seatPrice; 
      } else {
        state.selectedSeats.push(seat);
        const seatPrice =
          row === "A"
            ? seatPrices.platinum
            : row === "B" || row === "C" || row === "D"
            ? seatPrices.gold
            : row === "E" || row === "F"
            ? seatPrices.silver
            : 0;
        state.totalCost += seatPrice;  
      }
    
      state.error = "";
    },

    clearSeats: (state) => {
      state.selectedSeats = [];
      state.bookedSeats = [];
      state.totalCost = 0;
      state.error = "";
      localStorage.removeItem("bookedSeats");
    },

    bookSeats: (state) => {
      state.bookedSeats = [...state.bookedSeats, ...state.selectedSeats];
      state.selectedSeats = [];
      // saving bookedseats to localStorage
      localStorage.setItem("bookedSeats", JSON.stringify(state.bookedSeats));
    },
  },
});

export const { selectSeats, clearSeats, bookSeats } = seatSlice.actions;
export default seatSlice.reducer;
