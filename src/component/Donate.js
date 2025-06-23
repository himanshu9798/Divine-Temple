import React, { useState} from "react";
import jsPDF from "jspdf";
import god from "./images/god.png";
import goddes from "./images/goddes.png";
import diyaIcon from "./images/diya.png";
import templeIcon from "./images/temple.png";
const Donate = () => {
  const [step, setStep] = useState("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    customAmount: "",
    paymentMethod: "",
    upiId: "",
  });
  const [error, setError] = useState("");
  const [donationAmount, setDonationAmount] = useState(0);
  const containerStyle = {
    background: "#fff7ed",
    maxWidth: 480,
    width: "100%",
    borderRadius: "25px 25px 50px 50px",
    boxShadow: "0 12px 30px rgba(122, 64, 5, 0.25)",
    padding: 40,
    border: "6px solid #a56c33",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Roboto', sans-serif",
    color: "#4a2e0f",
    margin: "20px auto",
  };

  const headerStyle = {
    fontFamily: "'Playfair Display', serif",
    textAlign: "center",
    fontSize: "2.8rem",
    marginBottom: 5,
    color: "#7f4e00",
    userSelect: "none",
    position: "relative",
    zIndex: 2,
  };

  const diyaStyle = {
    fontSize: "1.8rem",
    marginLeft: 10,
    verticalAlign: "middle",
    color: "#e9c06b",
  };

  const labelStyle = {
    display: "block",
    fontWeight: 700,
    marginTop: 20,
    marginBottom: 6,
    fontSize: "1.1rem",
    letterSpacing: "0.02em",
    color: "#5a3c0c",
    userSelect: "none",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 12,
    border: "2.5px solid #c8a157",
    fontSize: 16,
    color: "#5a3c0c",
    backgroundColor: "#fff8e1",
    boxShadow: "inset 0 3px 6px rgba(255 255 255 / 0.8)",
    fontFamily: "'Roboto', sans-serif",
  };

  const buttonStyle = {
    width: "100%",
    marginTop: 30,
    background: "linear-gradient(45deg, #a15b0f, #7f4e00)",
    border: "none",
    padding: 15,
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#fff8e1",
    borderRadius: 35,
    cursor: "pointer",
    boxShadow: "0 4px 8px #6e3d00aa",
    userSelect: "none",
    fontFamily: "'Playfair Display', serif",
  };

  const methodButtonStyle = {
    width: "100%",
    marginTop: 15,
    fontSize: "1.1rem",
    borderRadius: 30,
    background: "#e9c06b",
    color: "#5a3c0c",
    boxShadow: "0 3px 6px #a57d33aa",
    fontWeight: 700,
    cursor: "pointer",
  };


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((fd) => ({ ...fd, [id]: value }));
    if (id === "amount" && value !== "custom") {
      setFormData((fd) => ({ ...fd, customAmount: "" }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Please enter your email");
      return false;
    }
    if (!formData.amount) {
      setError("Please select an amount");
      return false;
    }
    if (formData.amount === "custom") {
      const val = Number(formData.customAmount);
      if (!val || val <= 0) {
        setError("Please enter a valid custom amount");
        return false;
      }
    }
    setError("");
    return true;
  };

  // On Donate button click - validate and move to payment method selection
  const onDonateClick = () => {
    if (!validateForm()) return;
    setStep("paymentMethod");
  };

  // UPI Payment confirm
  const onConfirmUpiPayment = () => {
    if (!formData.upiId.trim()) {
      setError("Please enter your UPI ID");
      return;
    }
    setDonationAmount(
      formData.amount === "custom"
        ? Number(formData.customAmount)
        : Number(formData.amount)
    );
    setFormData((fd) => ({ ...fd, paymentMethod: "UPI" }));
    setStep("thankYou");
    setError("");
  };

  // QR Done
  const onQrDone = () => {
    setDonationAmount(
      formData.amount === "custom"
        ? Number(formData.customAmount)
        : Number(formData.amount)
    );
    setFormData((fd) => ({ ...fd, paymentMethod: "QR Code" }));
    setStep("thankYou");
  };

  // Razorpay Payment simulation (you can add real integration)
  const onRazorpayPayment = () => {
    setDonationAmount(
      formData.amount === "custom"
        ? Number(formData.customAmount)
        : Number(formData.amount)
    );
    setFormData((fd) => ({ ...fd, paymentMethod: "Razorpay" }));
    setStep("thankYou");
  };

  // Generate PDF Receipt
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const toDataUrl = (url) =>
      fetch(url)
        .then((response) => response.blob())
        .then(
          (blob) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            })
        );

    Promise.all([
      toDataUrl(god),
      toDataUrl(goddes),
      toDataUrl(templeIcon),
      toDataUrl(diyaIcon),
    ]).then(([godDataUrl, goddessDataUrl, templeDataUrl, diyaDataUrl]) => {
      // Set background
      doc.setFillColor(243, 232, 220); // #f3e8dc base color
      doc.rect(0, 0, pageWidth, pageHeight, "F");

      // HEADER with background
      const headerHeight = 30;
      const paddingX = 10;
      const iconSize = 12;

      doc.setFillColor(160, 108, 51); // Header bg
      doc.roundedRect(
        paddingX,
        10,
        pageWidth - paddingX * 2,
        headerHeight,
        6,
        6,
        "F"
      );

      // Header icons
      doc.addImage(templeDataUrl, "PNG", 18, 16, iconSize, iconSize);
      doc.addImage(diyaDataUrl, "PNG", pageWidth - 24, 16, iconSize, iconSize);

      // Header text
      doc.setFontSize(16);
      doc.setTextColor("#ffffff");
      doc.setFont("times", "bold");
      doc.text("Temple Donation Receipt", pageWidth / 2, 28, {
        align: "center",
      });

      // Add circular God/Goddess image
      const imgSize = 50;
      doc.setDrawColor(160, 108, 51);
      doc.setLineWidth(1);

      doc.circle(pageWidth / 2 - 30, 60, imgSize / 2, "S");
      doc.addImage(godDataUrl, "PNG", pageWidth / 2 - 55, 35, imgSize, imgSize);

      doc.circle(pageWidth / 2 + 30, 60, imgSize / 2, "S");
      doc.addImage(
        goddessDataUrl,
        "PNG",
        pageWidth / 2 + 5,
        35,
        imgSize,
        imgSize
      );

      // Message Box
      const boxY = 95;
      doc.setFillColor(255, 248, 225); // light box
      doc.roundedRect(20, boxY, pageWidth - 40, 60, 5, 5, "F");

      doc.setTextColor("#5a3c0c");
      doc.setFontSize(12);
      doc.setFont("times", "normal");

      doc.text(`Name: ${formData.name}`, 25, boxY + 15);
      doc.text(`Email: ${formData.email}`, 25, boxY + 25);
      doc.text(`Donation Amount: ₹${donationAmount}`, 25, boxY + 35);
      doc.text(`Payment Method: ${formData.paymentMethod}`, 25, boxY + 45);

      // Thank you message
      doc.setFont("times", "bold");
      doc.setTextColor("#7f4e00");

      // Blessing message at bottom
      const msgY = pageHeight - 45;
      doc.setFont("times", "italic");
      doc.setTextColor("#4a2e0f");
      doc.setFontSize(11);
      doc.text(
        "Your generous donation will be directly handed over to the temple authorities to help preserve",
        pageWidth / 2,
        msgY,
        { align: "center" }
      );
      doc.text(
        "our sacred heritage and support spiritual activities.",
        pageWidth / 2,
        msgY + 10,
        { align: "center" }
      );

      // Save PDF
      doc.save(`Temple_Donation_Receipt_${formData.name}.pdf`);
    });
  };

  return (
    <div
      style={{
        background:
          "#f3e8dc url('https://www.transparenttextures.com/patterns/arabesque.png') repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div style={containerStyle} aria-label="Donation form for temple support">
        <h1 style={headerStyle}>
          Support Our Temples <span style={diyaStyle}>🪔</span>
        </h1>
        <p
          style={{
            textAlign: "center",
            fontStyle: "italic",
            color: "#6e4c1e",
            maxWidth: 400,
            margin: "0 auto 30px",
            userSelect: "none",
          }}
        >
          Your generous donation will be directly handed over to the temple
          authorities to help preserve our sacred heritage and support spiritual
          activities.
        </p>

        {step === "form" && (
          <>
            {error && (
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                role="alert"
              >
                {error}
              </p>
            )}

            <form
              onSubmit={(e) => e.preventDefault()}
              aria-describedby="donate-desc"
              noValidate
            >
              <label htmlFor="name" style={labelStyle}>
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                autoComplete="name"
                aria-required="true"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
              />

              <label htmlFor="email" style={labelStyle}>
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                required
                autoComplete="email"
                aria-required="true"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
              />

              <label htmlFor="amount" style={labelStyle}>
                Amount (INR) <span aria-hidden="true">*</span>
              </label>
              <select
                id="amount"
                aria-required="true"
                required
                value={formData.amount}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="" disabled>
                  Select amount
                </option>
                <option value="500">₹500 – Basic Support</option>
                <option value="1000">₹1000 – Maintenance</option>
                <option value="5000">₹5000 – Sponsor a Ritual</option>
                <option value="custom">Custom Amount</option>
              </select>

              {formData.amount === "custom" && (
                <div
                  id="custom-amount-container"
                  style={{
                    marginTop: 10,
                    maxWidth: 260,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <input
                    type="number"
                    id="customAmount"
                    aria-label="Custom amount in INR"
                    placeholder="Enter custom amount"
                    min="1"
                    required
                    value={formData.customAmount}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
              )}

              <button
                type="button"
                id="donate-btn"
                aria-describedby="donate-desc"
                onClick={onDonateClick}
                style={buttonStyle}
              >
                Donate Now
              </button>
            </form>
          </>
        )}

        {step === "paymentMethod" && (
          <div
            id="payment-method-container"
            aria-live="polite"
            aria-atomic="true"
            style={{ userSelect: "none" }}
          >
            <h3
              style={{
                textAlign: "center",
                fontFamily: "'Playfair Display', serif",
                color: "#7f4e00",
              }}
            >
              Select Payment Method
            </h3>
            <button
              id="upi-btn"
              aria-label="Pay via UPI"
              onClick={() => setStep("upi")}
              style={methodButtonStyle}
            >
              Pay via UPI
            </button>
            <button
              id="qr-btn"
              aria-label="Pay via QR Code"
              onClick={() => setStep("qr")}
              style={methodButtonStyle}
            >
              Pay via QR Code
            </button>
            <button
              id="razorpay-btn"
              aria-label="Pay via Razorpay"
              onClick={onRazorpayPayment}
              style={methodButtonStyle}
            >
              Pay via Razorpay
            </button>
            <button
              style={{
                ...methodButtonStyle,
                backgroundColor: "#d98b14",
                marginTop: 25,
              }}
              onClick={() => setStep("form")}
            >
              Back to Form
            </button>
          </div>
        )}

        {step === "upi" && (
          <>
            <label htmlFor="upiId" style={labelStyle}>
              Enter your UPI ID
            </label>
            <input
              id="upiId"
              type="text"
              placeholder="example@upi"
              value={formData.upiId}
              onChange={handleChange}
              style={inputStyle}
            />
            {error && (
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                role="alert"
              >
                {error}
              </p>
            )}
            <button onClick={onConfirmUpiPayment} style={buttonStyle}>
              Confirm Payment
            </button>
            <button
              onClick={() => setStep("paymentMethod")}
              style={{
                ...methodButtonStyle,
                backgroundColor: "#d98b14",
                marginTop: 25,
              }}
            >
              Back to Payment Options
            </button>
          </>
        )}

        {step === "qr" && (
          <>
            <p
              style={{
                textAlign: "center",
                fontStyle: "italic",
                marginBottom: 20,
                color: "#5a3c0c",
                userSelect: "none",
              }}
            >
              Scan the QR code below to donate:
            </p>
            {/* Sample QR code image */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=https://example.com/donate&size=180x180"
              alt="QR code for temple donation"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 20,
                border: "6px solid #a56c33",
                borderRadius: 24,
              }}
            />
            <button onClick={onQrDone} style={buttonStyle}>
              I have paid
            </button>
            <button
              onClick={() => setStep("paymentMethod")}
              style={{
                ...methodButtonStyle,
                backgroundColor: "#d98b14",
                marginTop: 25,
              }}
            >
              Back to Payment Options
            </button>
          </>
        )}

        {step === "thankYou" && (
          <div
            role="alert"
            aria-live="polite"
            style={{ textAlign: "center", userSelect: "none" }}
          >
            <h2 style={{ color: "#7f4e00" }}>
              🙏 Thank you, {formData.name}! Your donation of ₹{donationAmount}{" "}
              via {formData.paymentMethod} is received.
            </h2>
            <button
              onClick={generatePDF}
              style={{ ...buttonStyle, maxWidth: 300, margin: "20px auto 0" }}
              aria-label="Download donation receipt as PDF"
            >
              Download Receipt (PDF)
            </button>
            <button
              onClick={() => {
                setStep("form");
                setFormData({
                  name: "",
                  email: "",
                  amount: "",
                  customAmount: "",
                  paymentMethod: "",
                  upiId: "",
                });
                setDonationAmount(0);
                setError("");
              }}
              style={{
                ...methodButtonStyle,
                backgroundColor: "#d98b14",
                marginTop: 25,
              }}
            >
              Donate Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;
