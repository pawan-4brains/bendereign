import styles from "@/styles/AgeGate.module.css";
import Image from "next/image";
import { useState } from "react";

function AgeGate({ onCompleted }) {
  const [verificationStep, setVericationStep] = useState(1);
  return (
    <>
      <div className={styles.ageGateContainer}>
        <div className={styles.logoContainer}>
          <Image width={348} height={236} src="/images/logo.png"></Image>
        </div>
        <div className={styles.ageGateBox}>
          <div className={styles.warning}>WARNING!</div>
          <div className={styles.warningDescription}>
            This website requires you to be 18 years or older to enter.
          </div>
          <div className={styles.ageYears}>ARE YOU OVER 18?</div>
          {verificationStep === 1 && (
            <button
              className={styles.button1}
              onClick={() => {
                setVericationStep(2);
              }}
            >
              Yes I'm
            </button>
          )}
          {verificationStep === 2 && (
            <button
              className={styles.button2}
              onClick={() => {
                setVericationStep(3);
              }}
            >
              Yes I'm
            </button>
          )}
          {verificationStep === 3 && (
            <button
              className={styles.button3}
              onClick={() => {
                setVericationStep(4);
              }}
            >
              Yes I'm
            </button>
          )}
          {verificationStep === 4 && (
            <button
              className={styles.button1}
              onClick={() => {
                localStorage.setItem("ageGateVerification", "done");
                onCompleted();
              }}
            >
              OK GREAT!
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default AgeGate;
