import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSeats } from "../features/seatSlice";

const SeatGrid = ({ seatLayout, bookedSeats, selectedSeats, seatPrices }) => {
  const dispatch = useDispatch();

  const handleSeatSelect = (seat) => {
    const row = seat.charAt(0);
    dispatch(selectSeats({ seat, row }));
  };

  const getSeatTierClass = (row) => {
    if (row === "A") return "platinum-seat";
    if (["B", "C", "D"].includes(row)) return "gold-seat";
    if (["E", "F"].includes(row)) return "silver-seat";
    return "";
  };

  return (

    <div>
    <div className="seatgrid">
      {seatLayout.map((row, rowIndex) =>
        row.map((seat) => {
          const rowLetter = seat.charAt(0);
          const tierClass = getSeatTierClass(rowLetter);
          return (
            <button
              key={seat}
              className={`seat-button ${tierClass} ${
                bookedSeats.includes(seat)
                  ? "booked"
                  : selectedSeats.includes(seat)
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleSeatSelect(seat)}
              disabled={bookedSeats.includes(seat)}
            >
              {seat}
            </button>
          );
        })
      )}
    </div>
    <div className="seat-price-section">
     
      <div className="seat-price-row">
        <span className="dot platinum-dot"></span>
        <span>Platinum: ₹200</span>
      </div>
      <div className="seat-price-row">
        <span className="dot gold-dot"></span>
        <span>Gold: ₹150</span>
      </div>
      <div className="seat-price-row">
        <span className="dot silver-dot"></span>
        <span>Silver: ₹100</span>
      </div>
      <div className="seat-price-row">
        <span className="dot red-dot"></span>
        <span>Already Booked</span>
      </div>
    </div>
    </div>
  );
};

export default SeatGrid;
