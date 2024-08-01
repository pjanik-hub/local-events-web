import React from "react";
import Link from "next/link";
import styles from "./Register.module.css";
import { signIn } from "@/auth";

const RegisterLoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Sign In with Email
        </button>
      </form>
      <form
        className={styles.form}
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/profile" });
        }}
      >
        <button type="submit" className={styles.button}>
          Sign In with Google
        </button>
      </form>
      <Link href="/" className={styles.backlink}>
        Back to Home
      </Link>
    </div>
  );
};

export default RegisterLoginPage;
