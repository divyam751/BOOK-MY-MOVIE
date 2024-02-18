import React, { useEffect, useState } from "react";
import chairG from "../assets/chairG.png";
import chairR from "../assets/chairR.png";

const SeatBooking = () => {
  const [seatData, setSeatData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const getURL = `http://localhost:8000/seats`;

  const fetchData = async (getURL) => {
    try {
      const response = await fetch(getURL);
      const data = await response.json();
      setSeatData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async (seat) => {
    const postData = {
      selected: !seat.selected,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    const putURL = `http://localhost:8000/seats/edit/${seat._id}`;
    console.log(putURL);
    try {
      const response = await fetch(putURL, requestOptions);
      const data = await response.json();
      fetchData(getURL);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleSelect = (seat) => {
    postData(seat);

    const isSelected = selectedSeats.includes(seat._id);

    if (!isSelected) {
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seat._id]);
    } else {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((selectedSeat) => selectedSeat !== seat._id)
      );
    }
  };
  console.log("selected seat : ", selectedSeats);

  useEffect(() => {
    fetchData(getURL);
  }, [getURL]);

  return (
    <div className="bookingContainer">
      <div className="seatsContainer">
        <div className="seatsPriceSection">
          <p>RECLINER-Rs. 450.00</p>
        </div>
        <div className="bookingRowF">
          <div className="bookingRowF">
            {seatData.map((seat, index) => {
              return index < 6 ? (
                <button
                  className={`seat ${seat.booked ? "seat-blocked" : ""} `}
                  key={index}
                  onClick={() => handleSelect(seat)}
                  disabled={seat.booked}
                  style={{
                    backgroundImage: `url(${seat.selected ? chairG : chairR})`,
                  }}
                >
                  <h4>{seat.id}</h4>
                </button>
              ) : (
                ""
              );
            })}
          </div>
        </div>
        <div className="seatsPriceSection">
          <p>PRIME-Rs. 260.00</p>
        </div>

        <div className="bookingRow">
          <div className="bookingRow-leftChild">
            {seatData.map((seat, index) => {
              if (index > 5 && (index - 6) % 8 < 4) {
                return (
                  <button
                    className={`seat ${seat.booked ? "seat-blocked" : ""} `}
                    key={index}
                    onClick={() => handleSelect(seat)}
                    disabled={seat.booked}
                    style={{
                      backgroundImage: `url(${
                        seat.selected ? chairG : chairR
                      })`,
                    }}
                  >
                    <h4>{seat.id}</h4>
                  </button>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="bookingRow-RightChild">
            {seatData.map((seat, index) => {
              if (index > 5 && (index - 6) % 8 < 4) {
                return null;
              } else if (index > 5) {
                return (
                  <button
                    className={`seat ${seat.booked ? "seat-blocked" : ""} `}
                    key={index}
                    onClick={() => handleSelect(seat)}
                    disabled={seat.booked}
                    style={{
                      backgroundImage: `url(${
                        seat.selected ? chairG : chairR
                      })`,
                    }}
                  >
                    <h4>{seat.id}</h4>
                  </button>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="tv-container">
        <div className="tv-screen">Screen</div>
      </div>
    </div>
  );
};

export default SeatBooking;
