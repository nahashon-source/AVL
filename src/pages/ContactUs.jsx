import React from 'react'
import '../index.css'

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600">
          We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
        </p>z
        <div className="mt-6 zflex justify-center gap-4">
          <button className="zbg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Start a Conversatzion
          </button>z
          <button className="zborder border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition">
            View Our Locationz
          </button>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white shadow p-6 rounded text-center">
          <h3 className="font-semibold mb-2">Call Us</h3>
          <p>+234 813 211 2282</p>
          <p>+234 906 000 5060</p>
        </div>
        <div className="bg-white shadow p-6 rounded text-center">
          <h3 className="font-semibold mb-2">Email Us</h3>
          <p>operations@adl.ng</p>
        </div>
        <div className="bg-white shadow p-6 rounded text-center">
          <h3 className="font-semibold mb-2">Visit Us</h3>
          <p>12B Wuraola Street, Off Opebi Road, Ikeja, Lagos</p>
        </div>
        <div className="bg-white shadow p-6 rounded text-center">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center gap-4 mt-2 text-blue-600">
            <span>📘</span>
            <span>🐦</span>
            <span>💼</span>
            <span>📸</span>
          </div>
        </div>
      </div>

      {/* Message Form */}
      <form className="bg-white shadow p-8 rounded mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input type="text" placeholder="Name" className="border p-3 rounded w-full" />
          <input type="text" placeholder="Company" className="border p-3 rounded w-full" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded w-full" />
          <input type="tel" placeholder="Phone Number" className="border p-3 rounded w-full" />
        </div>
        <textarea placeholder="Message" rows="5" className="border p-3 rounded w-full mb-6"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>

      {/* Business Hours */}
      <div className="text-center text-gray-600">
        <p><strong>Business Hours:</strong></p>
        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p>Saturday - Sunday: Closed</p>
      </div>
    </div>
  )
}

export default ContactUs
