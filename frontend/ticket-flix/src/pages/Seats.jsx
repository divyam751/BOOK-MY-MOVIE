import React, { useEffect, useState } from "react";
import seatData from "../components/api";
const Seats = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(seatData);
  }, [rows]);

  const handleSelect = (seat) => {
    console.log(seat.row + seat.id);
  };

  const getLastTenSeats = (row) => row.slice(-10);
  const getFirstSeats = (row) => row.slice(0, -10);

  return (
    <div className="seatContainer">
      <div className="seatParent">
        <div className="seatChild1">
          {rows.map(
            (row, index) =>
              index === 0 && (
                <div key={index} className="rowParentBox">
                  <div className="rowNameBox">
                    <h1 className="rowNumber ">{row[0].row} </h1>
                  </div>
                  <div className="rowChildFlex-first">
                    <div className="rowChildLeft">
                      {getFirstSeats(row).map((seat) => (
                        <div
                          key={seat.id}
                          className="seat"
                          onClick={() => handleSelect(seat)}
                        >
                          <h1>{seat.id}</h1>
                        </div>
                      ))}
                    </div>
                    <div className="rowChildRight">
                      {getLastTenSeats(row).map((seat) => (
                        <div
                          key={seat.id}
                          className="seat"
                          onClick={() => handleSelect(seat)}
                        >
                          <h1>{seat.id}</h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="seatChild2">
          {rows.map(
            (row, index) =>
              index > 0 &&
              index < 5 && (
                <div key={index} className="rowParentBox">
                  <div className="rowNameBox">
                    <h1 className="rowNumber">{row[0].row} </h1>
                  </div>
                  <div className="rowChildFlex">
                    <div className="rowChildLeft">
                      {getFirstSeats(row).map((seat) => (
                        <div
                          key={seat.id}
                          className="seat"
                          onClick={() => handleSelect(seat)}
                        >
                          <h1>{seat.id}</h1>
                        </div>
                      ))}
                    </div>
                    <div className="rowChildRight">
                      {getLastTenSeats(row).map((seat) => (
                        <div
                          key={seat.id}
                          className="seat"
                          onClick={() => handleSelect(seat)}
                        >
                          <h1>{seat.id}</h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="seatChild3">
          {rows.map(
            (row, index) =>
              index >= 5 && (
                <div key={index} className="rowParentBox">
                  <div className="rowNameBox">
                    <h1 className="rowNumber">{row[0].row} </h1>
                  </div>
                  <div className="rowChildFlex">
                    <div className="rowChildLeft">
                      {getFirstSeats(row).map((seat) => (
                        <div
                          key={seat.id}
                          className="seat"
                          onClick={() => handleSelect(seat)}
                        >
                          <h1>{seat.id}</h1>
                        </div>
                      ))}
                    </div>
                    <div className="rowChildRight">
                      {getLastTenSeats(row).map((seat) => (
                        <div
                          key={seat.id}
                          className="seat"
                          onClick={() => handleSelect(seat)}
                        >
                          <h1>{seat.id}</h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Seats;
