import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
   const [state, handleSubmit] = useForm("xanjrdok"); // ✅ This line goes here ONLY

  if (state.succeeded) {
    return <p className="text-white font-semibold">✅  Thank you for your hiring request! I’ll get back to you soon.</p>;
  }

  return (
    
       <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-md hover:shadow-lg transition"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm
