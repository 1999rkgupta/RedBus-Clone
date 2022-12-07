var tickets = [
  { no: 1, amount: 1000 },
  { no: 2, amount: 1000 },
  { no: 3, amount: 1000 },
  { no: 4, amount: 1000 },
  { no: 5, amount: 1000 },
  { no: 6, amount: 1000 },
  { no: 7, amount: 1000 },
  { no: 8, amount: 1000 },
  { no: 9, amount: 1000 },
  { no: 10, amount: 1000 },
  { no: 11, amount: 1000 },
  { no: 12, amount: 1000 },
  { no: 13, amount: 1000 },
  { no: 14, amount: 1000 },
  { no: 15, amount: 1000 },
  { no: 16, amount: 1000 },
  { no: 17, amount: 1000 },
  { no: 18, amount: 1000 },
  { no: 19, amount: 1000 },
  { no: 20, amount: 1000 },
  { no: 21, amount: 1000 },
  { no: 21, amount: 1000 },
  { no: 23, amount: 1000 },
  { no: 24, amount: 1000 },
  { no: 25, amount: 1000 },
  { no: 26, amount: 1000 },
  { no: 27, amount: 1000 },
  { no: 28, amount: 1000 },
  { no: 29, amount: 1000 },
  { no: 30, amount: 1000 },
  { no: 31, amount: 1000 },
  { no: 32, amount: 1000 },
  { no: 33, amount: 1000 },
  { no: 34, amount: 1000 },
  { no: 35, amount: 1000 },
  { no: 36, amount: 1000 },
  { no: 37, amount: 1000 },
  { no: 38, amount: 1000 },
  { no: 39, amount: 1000 },
  { no: 40, amount: 1000 },
];

let date1 = new Date().toUTCString();
document.getElementById("date").innerHTML = date1;

str = ``;
tickets.forEach(function (value, index) {
  // console.log(value, index);
  str =
    str +
    `
  <div class="col-xl-1" id="seatNumber" for="${value.no}#${value.amount}" onclick="myfun(this)"></div>
  `;
});
// console.log(str);
document.getElementById("maindiv").innerHTML = str;

let arr1 = [];
let arr2 = [];
function myfun(myvar) {
  // alert(1);
  // console.log(myvar);
  let ans = myvar.attributes.for.value;
  // console.log(ans);

  let ans1 = ans.split("#");
  console.log(ans1);

  let position = arr1.indexOf(ans1[0]);
  if (position == -1) {
    arr1.push(ans1[0]);
    arr2.push(ans1[1]);
    //  console.log("Ticket Added");
    msg = "Ticket Added";
  } else {
    //  console.log("Ticket Already Booked");
    msg = "Ticket Already Booked";
  }

  // console.log(arr1);
  // console.log(arr2);

  document.getElementById("msg").innerHTML = msg;

  final_no = arr1.join("&nbsp;,&nbsp;");
  // console.log(final_no);
  document.getElementById("no").innerHTML = final_no;

  final_amount = arr2.join("+");
  let total_amount = eval(final_amount);
  // console.log(final_amount);
  document.getElementById("amount").innerHTML = total_amount;

  myvar.style.background = "#49E726";
}
