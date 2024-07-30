"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Register.module.css";

const RegisterLoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      isLogin ? "Login submitted:" : "Registration submitted:",
      formData
    );
    // Here you would typically send the data to your backend
    console.log(isLogin ? "Login successful!" : "Registration successful!");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{isLogin ? "Login" : "Register"}</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {!isLogin && (
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </div>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <p className={styles.switchText}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <a
          href="#"
          onClick={() => setIsLogin(!isLogin)}
          className={styles.link}
        >
          {isLogin ? "Register" : "Login"}
        </a>
      </p>
      <Link href="/" className={styles.backlink}>
        Back to Home
      </Link>
    </div>
  );
};

export default RegisterLoginPage;
