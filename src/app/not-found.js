import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>404 - Page Not Found</h1>
        <p style={styles.message}>Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
         
        <Link href="/" style={styles.link}>
           Go Back to the home page 
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    padding: '20px',
  },
  content: {
    maxWidth: '600px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#343a40',
  },
  message: {
    fontSize: '1.25rem',
    marginBottom: '30px',
    color: '#6c757d',
  },
  image: {
    width: '80%',
    maxWidth: '400px',
    marginBottom: '40px',
  },
  link: {
    textDecoration: 'none',
    textDecorationColor:'#046271',
    fontSize:'20px',
    textTransform:'capitalize',
    fontWeight:600,
    color:'#046271'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.125rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default NotFound;
