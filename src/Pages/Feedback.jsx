import React from 'react';
import '../../src/App.css'


const FeedbackPage = () => {
  return (
    <div className="feedback-container">
      <h2>Give Your Feedback</h2>
      <form className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackPage;