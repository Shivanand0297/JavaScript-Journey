// variables for input and button

const btn = document.querySelector("#submit");
const qrCode = document.getElementById("qrcode")

const generateQRCode = () =>{
    clearUI();
    var textValue = document.querySelector("#input").value;

    if(textValue === ""){
        alert("Enter a valid input")
    } else{
        const newQrCode = new QRCode("qrcode",{
            text: textValue,
            width: 128,
            height: 128,
        });
    
    }
}


// funtion to reset

const clearUI = () =>{
    const qrImg = document.querySelector("#qrcode img")
    if(qrImg){
        qrCode.innerHTML=""
    }
}


btn.addEventListener("click", generateQRCode)

