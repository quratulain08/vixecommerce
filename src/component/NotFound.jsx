import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" style={styles.link}>← Go back home</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '4rem'
  },
  title: {
    fontSize: '6rem',
    margin: 0
  },
  message: {
    fontSize: '1.5rem',
    margin: '1rem 0'
  },
  link: {
    fontSize: '1.1rem',
    color: '#0070f3',
    textDecoration: 'none'
  }
};
