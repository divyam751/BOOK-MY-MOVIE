let rows = [];

let arrangement = "NMLKJIHGFEDCBA";

for (let r = 0; r < arrangement.length; r++) {
  let cols = [];
  if (r === 0) {
    for (let c = 0; c < 17; c++) {
      cols[c] = {
        id: arrangement[r] + (c + 1),
        booked: false,
        row: arrangement[r],
        seatNumber: c + 1,
      };
    }
  } else if (r < 5) {
    for (let c = 0; c < 20; c++) {
      cols[c] = {
        id: arrangement[r] + (c + 1),
        booked: false,
        row: arrangement[r],
        seatNumber: c + 1,
      };
    }
  } else {
    for (let c = 0; c < 16; c++) {
      cols[c] = {
        id: arrangement[r] + (c + 1),
        booked: false,

        row: arrangement[r],
        seatNumber: c + 1,
      };
    }
  }
  rows[r] = cols;
}

export default rows;
console.log(rows);
