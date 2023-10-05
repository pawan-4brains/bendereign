import Head from "next/head";
import Image from "next/image";
import { Raleway } from "next/font/google";
import styles from "@/styles/Signup.module.css";
import NavBar from "@/components/NavBar";
import { useState } from "react";

const raleway = Raleway({ subsets: ["latin"] });

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    let errors = {};

    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    if (!formData.username.trim()) errors.username = "Username is required";
    const mobilePattern = /^[0-9]{10}$/;
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile is required";
    } else if (!mobilePattern.test(formData.mobile)) {
      errors.mobile = "Invalid mobile number";
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
    const dobPattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
    } else if (!dobPattern.test(formData.dateOfBirth)) {
      errors.dateOfBirth = "Date of Birth format is invalid";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form is valid and can be submitted");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
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
          activeMenu={""}
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
              <div className={styles.headerText}>USER ACCOUNT</div>
              <form className={styles.formContainer} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="fullName"
                    className={styles.input1}
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <div className={styles.iconContainer1}>
                    <Image
                      src="/images/r-user.png"
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  {formErrors.fullName && (
                    <div className={styles.error}>{formErrors.fullName}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
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
                  {formErrors.username && (
                    <div className={styles.error}>{formErrors.username}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="mobile"
                    className={styles.input2}
                    placeholder="Mobile"
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
                  {formErrors.mobile && (
                    <div className={styles.error}>{formErrors.mobile}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
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
                  {formErrors.email && (
                    <div className={styles.error}>{formErrors.email}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
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
                  {formErrors.password && (
                    <div className={styles.error}>{formErrors.password}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
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
                  {formErrors.confirmPassword && (
                    <div className={styles.error}>
                      {formErrors.confirmPassword}
                    </div>
                  )}
                </div>

                <div className={styles.formGroup}>
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
                  {formErrors.dateOfBirth && (
                    <div className={styles.error}>{formErrors.dateOfBirth}</div>
                  )}
                </div>
                <div className={styles.agreement}>
                  By continuing, you agree to Bendereign Terms of Service and
                  Privacy Policy.
                </div>

                <div className={styles.btnContainer}>
                  <button type="submit">Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
