function generateQRCode() {
    const text = document.getElementById("text").value;
    const qrCode = document.getElementById("qrcode");
    qrCode.innerHTML = "";
  
    if (text.trim() !== "") {
      new QRCode(qrCode, {
        text: text,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    } else {
      alert("Please enter some text or URL!");
    }
  }
  
