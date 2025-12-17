import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

import Header from '../components/Header';
import styles from './page.module.css';

const PrivacyPage = () => {
  const mdPath = path.join(process.cwd(), 'src', 'content', 'privacy.md');
  const mdContent = fs.readFileSync(mdPath, 'utf-8');

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdContent}</ReactMarkdown>
      </div>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default PrivacyPage;
