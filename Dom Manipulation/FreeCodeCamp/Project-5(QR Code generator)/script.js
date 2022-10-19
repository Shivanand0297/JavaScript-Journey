// variables

const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const generatedOnSubmit = (e) => {
  clearUI();
  e.preventDefault(); // preventin default behaviour of the submit button to take to the next page
  // getting input from form
  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  // console.log(url, size); // checking for the valid values

  if (url === "") {
    alert("Enter a Valid URL");
  } else {
    // do rest of the thing

    //call show spinner function for one sec only
    showSpinner();

    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);

      setTimeout(() => {
        // since image url will not be availabe right away so we need to hold for some time
        const saveUrl = qr.querySelector("img").src;
        saveButton(saveUrl);
      }, 100);
    }, 1000);
  }
};

// qrcode.js link api

const generateQRCode = (url, size) => {
  // And we need to place it after we hide the loading svg
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const clearUI = () => {
  qrcode.innerHTML = "";
  const saveLink = document.getElementById("save-link");
  if (saveLink) {
    saveLink.remove();
  }
};

// and after coming out of the loop we need to hide the spinner
const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

hideSpinner();

const saveButton = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList = "bg-blue-500 w-1/3 m-auto rounded text-white py-3 px-3 my-5 hover:bg-blue-800";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save Image";
  document.getElementById("generated").appendChild(link);
};

// adding event listner on form to look for a submit action
form.addEventListener("submit", generatedOnSubmit);


/** Learnings
 * 
 * - adding event listner on form to look for a click event
 * - adding loading animation
 * - how to add attribute to a link tag (a.href, a.download = "id")
 * 
 * 
 *  */ 
