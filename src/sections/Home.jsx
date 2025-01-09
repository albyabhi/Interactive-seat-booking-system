import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSeats, clearSeats, bookSeats } from "../features/seatSlice";
import "./home.css";
import SeatGrid from "../components/SeatGrid";
import BookingSummary from "../components/BookingSummary";

const seatLayout = [
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"],
  ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
  ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
  ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
  ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"],
  ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10"],
];

const Home = () => {
  const dispatch = useDispatch();
  const { selectedSeats, bookedSeats, totalCost, error } = useSelector(
    (state) => state.seats
  );
  const [seatBooked, setSeatBooked] = useState([]);
  const [bookedCost, setBookedCost] = useState("");

  const handleBooking = () => {
    dispatch(bookSeats());
    setSeatBooked(selectedSeats);
    setBookedCost(totalCost);
  };

  const handleClearSeats = () => {
    dispatch(clearSeats());
  };

  const remainingSeats = seatLayout
    .flat()
    .filter(
      (seat) => !selectedSeats.includes(seat) && !bookedSeats.includes(seat)
    );

  return (
    <div className="mainContainer">
      {/* SeatGrid component */}
      <SeatGrid
        seatLayout={seatLayout}
        bookedSeats={bookedSeats}
        selectedSeats={selectedSeats}
      />
      {/* BookingSummaryd component */}
      <BookingSummary
        selectedSeats={selectedSeats}
        bookedSeats={bookedSeats}
        totalCost={totalCost}
        handleBooking={handleBooking}
        handleClearSeats={handleClearSeats}
        error={error}
        remainingSeats={remainingSeats}
      />
    </div>
  );
};

export default Home;
