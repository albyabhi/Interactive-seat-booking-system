import React from "react";

const BookingSummary = ({
  selectedSeats,
  bookedSeats,
  totalCost,
  handleBooking,
  handleClearSeats,
  error,
  remainingSeats,
}) => {
  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>
      {selectedSeats.length > 0 ? (
        <>
          <p>No of seats : {selectedSeats.length} </p>
          <p>{selectedSeats.join(", ")} </p>
          <p>Total Cost: ₹{totalCost}</p>
          <button onClick={handleBooking}>Book Now</button>
          <button onClick={handleClearSeats} className="clear-btn">
            Clear Booking
          </button>
        </>
      ) : (
        <p>Select Seats</p>
      )}
      {error && <p className="error">{error}</p>}
      <p>Remaining Seats: {remainingSeats.length}</p>
    </div>
  );
};

export default BookingSummary;
