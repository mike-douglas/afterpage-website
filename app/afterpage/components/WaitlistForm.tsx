'use client';

import { useState } from 'react';
import styles from './WaitlistForm.module.css';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Replace with Loops.so form submission
    // Example Loops.so integration:
    // const response = await fetch('https://app.loops.so/api/newsletter-form/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email }),
    // });

    // Simulate submission for now
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.success}>
        <svg className={styles.checkIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="var(--brand-teal)"/>
          <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>
          <p className={styles.successTitle}>You&apos;re on the list!</p>
          <p className={styles.successMessage}>We&apos;ll email you when early access begins.</p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={styles.input}
        disabled={isLoading}
      />
      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? 'Joining...' : 'Join the Waitlist'}
      </button>
    </form>
  );
}
