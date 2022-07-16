import { useState } from "react";
import QRCode from "react-qr-code";
import * as htmlToImage from 'html-to-image';
import download from "downloadjs";

function App() {
  const [qrCodeValue, setQrCodeValue] = useState('https://reactplay.io')

  function handleChange(e) {
    setQrCodeValue(e.target.value)
  }

  function handleDownload() {
    htmlToImage.toJpeg(document.querySelector("#qrContain"), {
      quality: 1
    }).then((dataUrl) => {
      download(dataUrl, 'qrcode.jpeg')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <div id="qrContain" style={{backgroundColor: 'white', width: 'fit-content'}}>
        <QRCode size={256} value={(qrCodeValue === undefined || qrCodeValue === "") ? 'https://reactplay.io' : qrCodeValue} />
      </div>
      <input id="qrValue" type={'text'} onChange={(e) => handleChange(e)} />
      <button id="download-btn" onClick={handleDownload}>Download</button>
    </div>
  );
}

export default App;
