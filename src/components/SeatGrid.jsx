import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSeats } from "../features/seatSlice";

const SeatGrid = ({ seatLayout, bookedSeats, selectedSeats }) => {
  const dispatch = useDispatch();

  const handleSeatSelect = (seat) => {
    const row = seat.charAt(0);
    dispatch(selectSeats({ seat, row }));
  };

  return (
    <div className="seatgrid">
      {seatLayout.map((row, rowIndex) =>
        row.map((seat) => (
          <button
            key={seat}
            className={`seat-button ${
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
        ))
      )}
    </div>
  );
};

export default SeatGrid;
