let rows = [];

let arrangement = "NMLKJIHGFEDCBA";

for (let r = 0; r < arrangement.length; r++) {
  let cols = [];
  if (r === 0) {
    for (let c = 0; c < 17; c++) {
      cols[c] = { id: c + 1, booked: false, row: arrangement[r] };
    }
  } else if (r < 5) {
    for (let c = 0; c < 20; c++) {
      cols[c] = { id: c + 1, booked: false, row: arrangement[r] };
    }
  } else {
    for (let c = 0; c < 16; c++) {
      cols[c] = { id: c + 1, booked: false, row: arrangement[r] };
    }
  }
  rows[r] = cols;
}

export default rows;
// let rows = [];

// let arrangement = "A";

// for (let r = 0; r < arrangement.length; r++) {
//   let cols = [];

//   for (let c = 0; c < 16; c++) {
//     cols[c] = { id: c + 1, booked: false, row: arrangement[r] };
//   }

//   rows[r] = cols;
// }

// console.log(rows);
// export default rows;
