import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Home = () => {
  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="page-root">
      <Navbar />

      <main className="page-content">
        <motion.div
          className="about-card"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>Hi, I’m Yokeshs TS</h2>

          <p>
            I’m a frontend-focused developer with experience building modern,
            scalable web applications using React, clean UI patterns, and
            animation-driven interactions.
          </p>

          <a
            href="https://pub-edbb4fb3dc8d4a0888aedccd05517627.r2.dev/Yokeshs_TS_Resume_2026.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
