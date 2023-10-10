import Head from "next/head";
import Image from "next/image";
import { Raleway } from "next/font/google";
import styles from "@/styles/Login.module.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import OTPVerification from "@/components/OTPVerification";
import { useRouter } from "next/router";

const raleway = Raleway({ subsets: ["latin"] });

export default function Login() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState();
  const [submitText, setSubmitText] = useState("Login");
  const [loginError, setLoginError] = useState();
  const [showOTP, setShowOTP] = useState(false);
  const [isOTPError, setIsOTPError] = useState(false);
  const [userId, setUserId] = useState();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    let errors = {};

    if (!formData.username.trim())
      errors.username = "Username/Email is required";

    if (!formData.password.trim()) errors.password = "Password is required";

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    let updatedErrors = { ...formErrors };
    switch (name) {
      case "username":
        if (!value.trim()) updatedErrors[name] = "Username is required";
        else delete updatedErrors[name];
        break;
      case "password":
        if (!value) updatedErrors[name] = "Password is required";
        else if (formData.confirmPassword && value !== formData.confirmPassword)
          updatedErrors.confirmPassword = "Passwords do not match";
        else {
          delete updatedErrors[name];
          if (formData.confirmPassword === value)
            delete updatedErrors.confirmPassword;
        }
        break;
      default:
        break;
    }

    setFormErrors(updatedErrors);
  };

  const handleSubmit = async (e) => {
    console.log(process.env.NEXT_PUBLIC_SERVER_URL);
    setLoginError();
    e.preventDefault();
    if (validate()) {
      try {
        setIsSubmitting(true);
        setSubmitText("Please wait...");
        const response = await axios.post(
          process.env.NEXT_PUBLIC_SERVER_URL + "/api/login-participant",
          formData
        );
        setShowOTP(true);
        setUserId(response.data.participantData._id);
      } catch (error) {
        setIsSubmitting(false);
        setSubmitText("Login");
        setLoginError("Sorry! Invalid credentails");
      }
    }
  };

  const verifyOTP = async (otp) => {
    setIsOTPError(false);
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/api/verify-login-otp",
        { userId: userId, otp: otp }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.participantData._id);
      localStorage.setItem("email", response.data.participantData.email);
      localStorage.setItem("username", response.data.participantData.username);
      localStorage.setItem("mobile", response.data.participantData.mobile);
      localStorage.setItem("fullname", response.data.participantData.fullname);

      setTimeout(() => {
        setShowOTP(false);
        router.push("/");
      }, 1000);
    } catch (error) {
      setIsOTPError(true);
    }
  };

  const resendOTP = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/api/resend-login-otp",
        { userId: userId }
      );
    } catch (error) {}
  };

  return (
    <>
      <Head>
        <title>Events | Bendereign</title>
        <meta name="description" content="Bendereign" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={`${raleway.className}`}>
        <NavBar
          activeMenu={"LOGIN"}
          bgColor={styles.navBarBG2}
          navbarClass={"navBarContainer1"}
        />
        <div className={styles.section1}>
          <div className={styles.workContainer}>
            <div className={styles.starContainer}>
              <Image src="/images/star.png" width={1519} height={363}></Image>
            </div>
            <div className={styles.moon}></div>
            <div className={styles.welcome}>WELCOME TO THE</div>
            <div className={styles.brandName}>BENDEREIGN</div>
            <div className={styles.registrationContainer}>
              <div className={styles.headerText}>USER LOGIN</div>
              <form className={styles.formContainer} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      name="username"
                      className={styles.input1}
                      placeholder="Username / Email"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    <div className={styles.iconContainer1}>
                      <Image
                        src="/images/r-user.png"
                        width={100}
                        height={100}
                      ></Image>
                    </div>
                  </div>
                  {formErrors.username && (
                    <div className={styles.error}>{formErrors.username}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputBox}>
                    <input
                      type="password"
                      name="password"
                      className={styles.input2}
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <div className={styles.iconContainer2}>
                      <Image
                        src="/images/r-lock.png"
                        width={100}
                        height={100}
                      ></Image>
                    </div>
                  </div>
                  {formErrors.password && (
                    <div className={styles.error}>{formErrors.password}</div>
                  )}
                </div>

                <div className={styles.forgotPassword}>
                  <Link href="/forgot-password">Forgot Password?</Link>
                </div>
                {loginError && (
                  <div className={styles.loginError}>{loginError}</div>
                )}
                <div className={styles.btnContainer}>
                  <button type="submit" disabled={isSubmitting}>
                    {submitText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {showOTP && (
          <OTPVerification
            onVerifyOTP={verifyOTP}
            onOTPError={isOTPError}
            onResendOTP={resendOTP}
          />
        )}
      </main>
    </>
  );
}
