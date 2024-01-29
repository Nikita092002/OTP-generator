function generateOTP(length) {
    var digits = "0123456789";
    let OTP = '';

    for(let i=0; i<length; i++){
        OTP +=digits[Math.floor(Math.random()*10)];
    }
    var span = document.querySelector('.box span');
    span.innerHTML=OTP;
    
}
// Function to generate a 4-digit OTP
function generate4DigitOTP() {
    generateOTP(4);
}

// Function to generate a 6-digit OTP
function generate6DigitOTP() {
    generateOTP(6);
}