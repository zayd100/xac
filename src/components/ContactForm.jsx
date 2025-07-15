import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/about.css';
function ContactForm() {
  const [state, handleSubmit] = useForm("xgvzeyay");
  
  if (state.succeeded) {
      return (
        <section className="contact-section">
          <div className="contact-content">
            <div className="submit-message success">
              Thank you for your message! We'll get back to you soon.
            </div>
          </div>
        </section>
      );
  }

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p>Ready to start your next project? We'd love to hear from you.</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email" 
                name="email"
                placeholder="Enter your email"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
            <ValidationError 
              prefix="Phone" 
              field="phone"
              errors={state.errors}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project or question..."
              rows="5"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          
          <button 
            type="submit" 
            className={`submit-button ${state.submitting ? 'submitting' : ''}`}
            disabled={state.submitting}
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;