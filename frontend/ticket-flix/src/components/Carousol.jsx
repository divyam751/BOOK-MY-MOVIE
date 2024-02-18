import React, { useEffect, useState } from "react";

const Carousol = () => {
  const background = [
    "https://image.tmdb.org/t/p/original/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
    "https://image.tmdb.org/t/p/original/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
    "https://image.tmdb.org/t/p/original/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
    "https://image.tmdb.org/t/p/original/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
    "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
  ];

  const [bg, setBg] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      i = (i + 1) % background.length;
      setBg(background[i]);
      setCount((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className="carousol-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="carousol-textcontent">
        <p>Welcome TO Ticket-Flix</p>
      </div>
    </div>
  );
};

export default Carousol;
