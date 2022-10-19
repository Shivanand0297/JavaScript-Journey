// variables for form and and qr code

const form = document.querySelector("#generate-form");
const qrCode = document.querySelector("#qrcode");

const generatedOnSubmit = (e) => {
  clearUI();
  e.preventDefault();
  const url = document.querySelector("#url").value;
  const size = document.querySelector("#size").value;
  // console.log(url, size);

  if (url === "") {
    alert("Please enter a valid URL");
  } else {
    // showing loading svg
    showSpinner();

    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);

      setTimeout(() => {
        const saveLink = qrCode.querySelector("img").src;
        saveButton(saveLink);
      }, 1000);
    }, 1000);
  }
};

const showSpinner = () => {
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "block";
};

const hideSpinner = () => {
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "none";
};

const generateQRCode = (url, size) => {
  const apiQrCode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

// function for clearing UI

const clearUI = () => {
  qrCode.innerHTML = "";
  const saveimg = document.getElementById("saveBtn");
  if (saveimg) {
    saveimg.ramove();
  }
};

// adding save button

const saveButton = (saveLink) => {
  const btn = document.createElement("a");
  btn.setAttribute("id", "saveBtn");
  btn.classList =
    "bg-blue-500 w-1/3 m-auto rounded text-white py-3 px-3 mt-5 hover:bg-blue-800";
  btn.href = saveLink;
  btn.download = "qrcode";
  btn.innerHTML = "Save Image";
  document.getElementById("generated").appendChild(btn);
};

// adding event listener on form to look for a sumbit action

form.addEventListener("submit", generatedOnSubmit);
