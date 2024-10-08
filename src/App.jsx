// react and other libraries
import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

// components
import Footer from "./components/Footer.jsx";
import Navigation from "./components/Navigation.jsx";

// constants
const MIN_LENGTH = 1;
const MAX_LENGTH = 500;
const ERROR_MESSAGES = {
  length: "Input must not exceed 500 characters",
};
const QR_SIZE_MOBILE = 192;
const QR_SIZE_DESKTOP = 384;

/**
 *
 * Container component which holds the Navbar, Footer, and body of the QRCode generator.
 *
 * @returns {React.JSX.Element} A page containing the Navbar, page content, and Footer.
 */
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState({ empty: true, length: false });
  const [qrSize, setQrSize] = useState(QR_SIZE_DESKTOP);

  // handles changes in the textarea
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    setError({
      empty: value.length < MIN_LENGTH,
      length: value.length > MAX_LENGTH,
    });
  };

  // determines textarea border color based on error(s)
  const getTextareaClass = () => {
    if (error.length) return "textarea-error";
    if (!error.empty) return "textarea-success";
    return "";
  };

  // handles QRCode size based on display width
  const updateQrSize = () => {
    if (window.innerWidth < 640) {
      setQrSize(QR_SIZE_MOBILE); // mobile
    } else {
      setQrSize(QR_SIZE_DESKTOP); // desktop
    }
  };

  // manages tracking of window resizing for QRCode
  useEffect(() => {
    updateQrSize();
    window.addEventListener("resize", updateQrSize);
    return () => window.removeEventListener("resize", updateQrSize);
  }, []);

  return (
    <>
      <Navigation />

      <div className="flex grow flex-col items-center justify-center">
        <label className="form-control m-10">
          <div className="label">
            <span className="label-text">QRCode Value</span>
          </div>
          <textarea
            className={`textarea textarea-bordered h-32 w-48 resize-none sm:w-96 ${getTextareaClass()}`}
            placeholder="Type here"
            value={inputValue}
            onChange={handleInputChange}
          ></textarea>
          {error.length && (
            <div className="label">
              <span className="label-text-alt text-error">
                {ERROR_MESSAGES.length}
              </span>
            </div>
          )}
        </label>

        {error.length || error.empty ? (
          <div className="skeleton h-48 w-48 sm:h-96 sm:w-96" />
        ) : (
          <QRCodeSVG
            value={inputValue}
            title={`A QRCode of value: '${inputValue}'`}
            size={qrSize}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            marginSize={1}
          />
        )}
      </div>

      <Footer />
    </>
  );
}
