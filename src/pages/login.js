import Head from "next/head";
import Image from "next/image";
import { Raleway } from "next/font/google";
import styles from "@/styles/Login.module.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useState } from "react";

const raleway = Raleway({ subsets: ["latin"] });

export default function Login() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form is valid and can be submitted");
    }
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

                <div className={styles.btnContainer}>
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
