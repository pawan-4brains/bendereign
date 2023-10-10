import styles from "@/styles/OTP.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function OTPVerification({ onVerifyOTP, onOTPError, onResendOTP }) {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [resendCooldown, setResendCooldown] = useState(30);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitText, setSubmitText] = useState("Sumbit");
  const [isSubmitting, setIsSubmitting] = useState();

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  useEffect(() => {
    if (onOTPError) {
      setIsSubmitting(false);
      setSubmitText("Submit");
      setErrorMsg("Wrong OTP! Please enter a 6-digit valid OTP.");
    }
  }, [onOTPError]);

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleOtpChange = (e, index) => {
    setErrorMsg();
    const value = e.target.value;

    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && inputRefs.current[index - 1]) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    onResendOTP();
    setResendCooldown(30);
  };

  const validateOtp = () => {
    if (otp.some((o) => o === "")) {
      setErrorMsg("Wrong OTP! Please enter a 6-digit valid OTP.");
      return false;
    }

    if (otp.some((o) => !/^[0-9]$/.test(o))) {
      setErrorMsg("Please enter only numeric values.");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    setErrorMsg();
    setIsSubmitting(true);
    setSubmitText("Please wait...");
    if (validateOtp()) {
      onVerifyOTP(otp.join(""));
    } else {
      console.log("error");
    }
  };

  return (
    <div className={styles.otpWrapper}>
      <div className={styles.otpContainer}>
        <div>
          <div className={styles.shieldContainer}>
            <Image
              src="/images/shield.png"
              width={288}
              height={354}
              alt="Verification"
            ></Image>
          </div>
          <div className={styles.otpInstruction}>
            Please enter the 6-digit OTP sent to your<br></br>registered mobile
            number
          </div>
          <div className={styles.error}>{errorMsg}</div>
          <div className={styles.otpInputContainer}>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                maxLength={1}
                autoComplete="off"
              />
            ))}
          </div>
          <div className={styles.resendContainer}>
            {resendCooldown <= 0 ? (
              <button onClick={handleResend}>Resend OTP</button>
            ) : (
              <div className={styles.resendText}>
                <span>Resend OTP in {resendCooldown} seconds</span>
              </div>
            )}
          </div>
          <div className={styles.btnContainer}>
            <button onClick={handleSubmit} disabled={isSubmitting}>
              {submitText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;
