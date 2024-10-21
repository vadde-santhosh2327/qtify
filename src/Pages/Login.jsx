import React from 'react';

const LoginPage = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#000', // Background color changed to black
    },
    loginBox: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#28a745', // Login container color changed to green
      borderRadius: '8px',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
      padding: '20px',
    },
    heading: {
      textAlign: 'center',
      color: '#fff', // Changed text color to white for better contrast
      marginBottom: '20px',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      color: '#fff', // Label color changed to white for visibility
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#fff', // Input field background changed to white
      fontSize: '14px',
      color: '#000', // Input text color changed to black for readability
    },
    button: {
      width: '100%',
      backgroundColor: '#ff4b2b',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#ff6347',
    },
    signupLink: {
      textAlign: 'center',
      marginTop: '20px',
    },
    signupAnchor: {
      color: '#ff4b2b',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Login to Qtify</h2>
        <form action="#" method="POST">
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required style={styles.input} />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <div style={styles.signupLink}>
          <p>Don't have an account? <a href="#" style={styles.signupAnchor}>Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;