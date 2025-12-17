import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';

import Navigation from '../afterpage/components/Navigation';
import Footer from '../afterpage/components/Footer';
import styles from './page.module.css';

const PrivacyPage = () => {
  const mdPath = path.join(process.cwd(), 'content', 'privacy.md');
  const mdContent = fs.readFileSync(mdPath, 'utf-8');

  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.content}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdContent}</ReactMarkdown>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
