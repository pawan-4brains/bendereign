import Head from "next/head";
import Image from "next/image";
import { Raleway } from "next/font/google";
import styles from "@/styles/Signup.module.css";
import NavBar from "@/components/NavBar";
import { Fragment, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OTPVerification from "@/components/OTPVerification";
import { useRouter } from "next/router";

const raleway = Raleway({ subsets: ["latin"] });

import successAnimation from "../../public/success.json";

export default function Signup() {
  const router = useRouter();

  const [showCalendar, setShowCalendar] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState();
  const [submitText, setSubmitText] = useState("Create Account");
  const [signupError, setSignupError] = useState();
  const [showOTP, setShowOTP] = useState(false);
  const [isOTPError, setIsOTPError] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "Pawan Kumar",
    username: "pawan.4brains",
    mobile: "+919835515852",
    email: "pawan@4brains.in",
    password: "Itsmylife@189",
    confirmPassword: "Itsmylife@189",
    dateOfBirth: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const isValidUsername = (username) => {
    const regex = /^[a-zA-Z0-9_.]+$/;
    return regex.test(username);
  };

  const validate = () => {
    let errors = {};

    if (!formData.fullname.trim()) errors.fullname = "Full Name is required";
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    } else if (!isValidUsername(formData.username)) {
      errors.username =
        "Invalid username! Only alphanumeric characters, '_' and '.' are allowed.";
    }

    const mobilePattern = /^\+\d{2,4}[0-9]{9,10}$/;

    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile with country code is required";
    } else if (!mobilePattern.test(formData.mobile)) {
      errors.mobile =
        "Invalid mobile number with country code. E.g., +919876543210 or +971585500564";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.password) errors.password = "Password is required";
    if (!formData.confirmPassword)
      errors.confirmPassword = "Password is required";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
    } else if (!dobPattern.test(formData.dateOfBirth)) {
      errors.dateOfBirth = "Date format should be DD/MM/YYYY.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    let updatedErrors = { ...formErrors };
    switch (name) {
      case "fullname":
        if (!value.trim()) updatedErrors[name] = "Full Name is required";
        else delete updatedErrors[name];
        break;
      case "username":
        if (!value.trim()) updatedErrors[name] = "Username is required";
        else if (!isValidUsername(value))
          updatedErrors[name] =
            "Invalid username! Only alphanumeric characters, '_' and '.' are allowed.";
        else delete updatedErrors[name];
        break;
      case "mobile":
        if (!value.trim())
          updatedErrors[name] = "Mobile with country code is required";
        else if (!/^\+\d{2,4}[0-9]{9,10}$/.test(value))
          updatedErrors[name] =
            "Invalid mobile number with country code. E.g., +919876543210 or +971987654321";
        else delete updatedErrors[name];
        break;

      case "email":
        if (!value.trim()) updatedErrors[name] = "Email is required";
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value))
          updatedErrors[name] = "Invalid email address";
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
      case "confirmPassword":
        if (!value) updatedErrors[name] = "Password is required";
        else if (value !== formData.password)
          updatedErrors[name] = "Passwords do not match";
        else delete updatedErrors[name];
        break;
      case "dateOfBirth":
        if (!value) updatedErrors[name] = "Date of Birth is required";
        else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value))
          updatedErrors[name] = "Date format should be DD/MM/YYYY.";
        else delete updatedErrors[name];
        break;
      default:
        break;
    }

    setFormErrors(updatedErrors);
  };

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const validateDateOfBirth = (value) => {
    let error = "";
    const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!value) {
      error = "Date of Birth is required";
    } else if (!dobPattern.test(value)) {
      error = "Date format should be DD/MM/YYYY.";
    }
    return error;
  };

  const handleDateChange = (date) => {
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;

    setFormData((prevState) => ({ ...prevState, dateOfBirth: formattedDate }));

    const error = validateDateOfBirth(formattedDate);

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      dateOfBirth: error || undefined,
    }));

    setShowCalendar(false);
  };

  const selectedDate = formData.dateOfBirth
    ? parseDate(formData.dateOfBirth)
    : null;

  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 75;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignupError();
    if (validate()) {
      try {
        setIsSubmitting(true);
        setSubmitText("Please wait...");
        const response = await axios.post(
          process.env.NEXT_PUBLIC_SERVER_URL + "/api/register-participant",
          formData
        );
        setShowOTP(true);
      } catch (error) {
        setIsSubmitting(false);
        setSubmitText("Create Account");
        setSignupError(error.response.data.message);
        console.log(error.response);
      }
    }
  };

  const verifyOTP = async (otp) => {
    setIsOTPError(false);
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/api/verify-otp",
        { mobile: formData.mobile, otp: otp }
      );
      setShowOTP(false);
      setIsRegistered(true);
    } catch (error) {
      setIsOTPError(true);
    }
  };

  const resendOTP = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/api/resend-mobile-otp",
        { mobile: formData.mobile }
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
          activeMenu={"SIGNUP"}
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

            {!isRegistered && (
              <div className={styles.registrationContainer}>
                <div className={styles.headerText}>USER ACCOUNT</div>

                <form className={styles.formContainer} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <div className={styles.inputBox}>
                      <input
                        type="text"
                        name="fullname"
                        className={styles.input1}
                        placeholder="Full Name"
                        value={formData.fullname}
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

                    {formErrors.fullname && (
                      <div className={styles.error}>{formErrors.fullname}</div>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <div className={styles.inputBox}>
                      <input
                        type="text"
                        name="username"
                        className={styles.input1}
                        placeholder="Username"
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
                        type="text"
                        name="mobile"
                        className={styles.input2}
                        placeholder="Mobile with country code"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      <div className={styles.iconContainer2}>
                        <Image
                          src="/images/r-phone.png"
                          width={100}
                          height={100}
                        ></Image>
                      </div>
                    </div>
                    {formErrors.mobile && (
                      <div className={styles.error}>{formErrors.mobile}</div>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <div className={styles.inputBox}>
                      <input
                        type="email"
                        name="email"
                        className={styles.input2}
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <div className={styles.iconContainer2}>
                        <Image
                          src="/images/r-mail.png"
                          width={100}
                          height={100}
                        ></Image>
                      </div>
                    </div>
                    {formErrors.email && (
                      <div className={styles.error}>{formErrors.email}</div>
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

                  <div className={styles.formGroup}>
                    <div className={styles.inputBox}>
                      <input
                        type="password"
                        name="confirmPassword"
                        className={styles.input1}
                        placeholder="Retype The Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      <div className={styles.iconContainer1}>
                        <Image
                          src="/images/r-lock.png"
                          width={100}
                          height={100}
                        ></Image>
                      </div>
                    </div>
                    {formErrors.confirmPassword && (
                      <div className={styles.error}>
                        {formErrors.confirmPassword}
                      </div>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <div className={styles.inputBox}>
                      <input
                        type="text"
                        name="dateOfBirth"
                        className={styles.input1}
                        placeholder="Date of Birth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                      <div className={styles.iconContainer1}>
                        <Image
                          src="/images/r-cal.png"
                          width={100}
                          height={100}
                        ></Image>
                      </div>
                      <div className={styles.calIcon}>
                        <Image
                          src="/images/cal-i.png"
                          width={512}
                          height={512}
                          onClick={() => {
                            setShowCalendar((val) => !showCalendar);
                          }}
                        ></Image>
                      </div>
                    </div>
                    <div className={styles.customCalendarContainer}>
                      {showCalendar && (
                        <div className={styles.customInlineCalendar}>
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            inline
                            showYearDropdown
                            yearDropdownItemNumber={70}
                            minDate={new Date(minYear, 0, 1)}
                            maxDate={new Date()}
                          />
                        </div>
                      )}
                    </div>
                    {formErrors.dateOfBirth && (
                      <div className={styles.error}>
                        {formErrors.dateOfBirth}
                      </div>
                    )}
                  </div>
                  <div className={styles.agreement}>
                    By continuing, you agree to Bendereign Terms of Service and
                    Privacy Policy.
                  </div>
                  {signupError && (
                    <div className={styles.signUpError}>{signupError}</div>
                  )}

                  <div className={styles.btnContainer}>
                    <button type="submit" disabled={isSubmitting}>
                      {submitText}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {isRegistered && (
              <div className={styles.thankyouContainer}>
                <Fragment>
                  <div className={styles.headerText}>USER ACCOUNT</div>
                  <div className={styles.thankyouBox}>
                    <div>
                      <Lottie
                        animationData={successAnimation}
                        loop={false}
                        autoPlay
                        className={styles.successIcon}
                      />
                    </div>
                    <div className={styles.thankYouHeader}>
                      Registration Successful!
                    </div>
                    <div className={styles.thankYouBody}>
                      Thank you for registering with us. We're delighted to have
                      you onboard!
                    </div>
                    <div className={styles.btnContainer}>
                      <button
                        type="button"
                        onClick={() => {
                          router.push("/login");
                        }}
                      >
                        Login Now
                      </button>
                    </div>
                  </div>
                </Fragment>
              </div>
            )}
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
