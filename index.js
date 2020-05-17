function sendOTP() {
  var inputValue = document.getElementById("phone-num-input").value;
  console.log(inputValue);
  if (isNaN(inputValue)) {
    alert("please enter a valid Number");
  } else {
    let generatedOTP = generateOTP();
    localStorage.setItem("OTP", generatedOTP);
    console.log("In else Block ");
    alert("Your OTP is " + generatedOTP);
  }
}

function generateOTP() {
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += Math.floor(Math.random() * 10);
  }
  return OTP;
}

function verifyOTP() {
  var OTP = "";
  var firstDigit = document.getElementById("first-digit").value;
  var secondDigit = document.getElementById("second-digit").value;
  var thirdDigit = document.getElementById("third-digit").value;
  var fourthDigit = document.getElementById("fourth-digit").value;

  OTP += firstDigit;
  OTP += secondDigit;
  OTP += thirdDigit;
  OTP += fourthDigit;

  let generatedOTP = localStorage.getItem("OTP");
  if (generatedOTP === OTP) {
    alert("Succes, you are logged In");
  } else {
    alert("please enter valid OTP number");
  }
}
