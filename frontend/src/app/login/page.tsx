"use client";

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column'}}>
      <h1>Login</h1>
      <p>This is a placeholder login page. Implement your login form here.</p>
      <Link href="/">Go home</Link>
    </div>
  );
}
