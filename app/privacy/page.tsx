import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./page.module.css";

const PrivacyPage = () => {
  const mdPath = path.join(process.cwd(), "content", "privacy.md");
  const mdContent = fs.readFileSync(mdPath, "utf-8");

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={`container ${styles.content}`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdContent}</ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;
