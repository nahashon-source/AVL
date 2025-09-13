// src/pages/ContactUs.jsx
import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";

const PhoneIcon = () => (
  <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243.177-2.02 1.02-2.702C4.1 3.42 5.17 3 6.75 3h10.5c1.58 0 2.65.42 3.48 1.048.843.682 1.02 1.459 1.02 2.702v10.5c0 1.243-.177 2.02-1.02 2.702C19.9 20.58 18.83 21 17.25 21H6.75c-1.58 0-2.65-.42-3.48-1.048-.843-.682-1.02-1.459-1.02-2.702V6.75z"></path>
  </svg>
);
const MailIcon = () => (
  <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25v7.5A2.25 2.25 0 0 0 5.25 18h13.5A2.25 2.25 0 0 0 21 15.75V8.25M3 8.25l8.25 4.5L19.5 8.25"></path>
  </svg>
);
const LocationIcon = () => (
  <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 11c0 7.5-7.5 11-7.5 11S4.5 18.5 4.5 11a7.5 7.5 0 1 1 15 0z"></path>
  </svg>
);

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Background hero with abstract shapes from public/images/contact */}
      <section
        className="relative overflow-hidden"
        aria-label="Contact hero"
      >
        {/* Background image + subtle overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[url('/images/contact')] bg-cover bg-center mix-blend-normal"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" aria-hidden />
        </div>

        <div className="relative container mx-auto px-4 pt-16 pb-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                Start a Conversation
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
                View Our Location
              </button>
            </div>
          </div>

          {/* 4 Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-md p-6 text-center transform -translate-y-4">
              <div className="text-sm text-gray-500">Call Us</div>
              <div className="mt-3 text-sm text-blue-600 font-medium">
                <PhoneIcon /> <span className="ml-2">+234 (0) 813 211 2282</span>
              </div>
              <div className="mt-2 text-sm text-gray-500">Mon - Fri: 8AM - 6PM</div>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-50 rounded-xl shadow-md p-6 text-center">
              <div className="text-sm text-gray-500">Email Us</div>
              <div className="mt-3 text-sm text-gray-800 font-medium">
                <MailIcon /> <span className="ml-2">hello@connectadv.com</span>
              </div>
              <div className="mt-2 text-xs text-gray-500">We’ll respond within 24 hours</div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/90 rounded-xl shadow-md p-6 text-center transform translate-y-4">
              <div className="text-sm text-gray-500">Visit Us</div>
              <div className="mt-3 text-sm text-gray-800 font-medium">
                <LocationIcon /> <span className="ml-2 block">123 Business Ave, Suite 100</span>
                <span className="block text-sm text-gray-500 mt-1">New York, NY 10001</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-blue-50 rounded-xl shadow-md p-6 text-center">
              <div className="text-sm text-gray-500">Follow Us</div>
              <div className="mt-4 flex justify-center gap-4 text-blue-600">
                <div className="w-9 h-9 rounded-md bg-white/80 flex items-center justify-center shadow">f</div>
                <div className="w-9 h-9 rounded-md bg-white/80 flex items-center justify-center shadow">t</div>
                <div className="w-9 h-9 rounded-md bg-white/80 flex items-center justify-center shadow">in</div>
                <div className="w-9 h-9 rounded-md bg-white/80 flex items-center justify-center shadow">ig</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main area: form (left) + contact info (right) */}
      <section className="container mx-auto px-4 pb-12 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form - left (spans 7 of 12 on large screens) */}
          <div className="lg:col-span-7">
            <form className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                  <input className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Jane Doe" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email Address</label>
                  <input className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="you@example.com" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Company</label>
                  <input className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your Company" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                  <input className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="+1 (555) 555-5555" />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-gray-600 mb-1">Subject</label>
                <input className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="How can we help you?" />
              </div>

              <div className="mt-4">
                <label className="block text-sm text-gray-600 mb-1">Message</label>
                <textarea className="w-full border border-gray-200 rounded-md px-4 py-3 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Tell us more about your inquiry..." />
              </div>

              <div className="mt-4">
                <button type="submit" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact info - right (spans 5 of 12 on large screens) */}
          <aside className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <h3 className="text-lg font-semibold">Contact Information</h3>

                <div className="mt-6 grid grid-cols-1 gap-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-md">
                      <PhoneIcon />
                    </div>
                    <div>
                      <div className="text-xs text-white/90">Phone</div>
                      <div className="font-medium mt-1">+234 (0) 813 211 2282</div>
                      <div className="text-xs mt-1">Mon - Fri: 8AM - 6PM</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-md">
                      <MailIcon />
                    </div>
                    <div>
                      <div className="text-xs text-white/90">Email</div>
                      <div className="font-medium mt-1">hello@connectadv.com</div>
                      <div className="text-xs mt-1">We’ll respond within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-md">
                      <LocationIcon />
                    </div>
                    <div>
                      <div className="text-xs text-white/90">Address</div>
                      <div className="font-medium mt-1">123 Business Ave, Suite 100</div>
                      <div className="text-xs mt-1">New York, NY 10001</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-md">
                      <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25h18M7.5 21V8.25m9 12.75V8.25"></path></svg>
                    </div>
                    <div>
                      <div className="text-xs text-white/90">Business Hours</div>
                      <div className="font-medium mt-1">Mon - Fri: 8:00 AM - 6:00 PM</div>
                      <div className="text-xs mt-1">Sat: 9:00 AM - 2:00 PM · Sun: Closed</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="bg-white/10 px-3 py-2 rounded-md text-sm hover:bg-white/20">Follow</button>
                  <button className="bg-white/10 px-3 py-2 rounded-md text-sm hover:bg-white/20">Message</button>
                </div>
              </div>

              <div className="p-4 bg-white">
                {/* Small social icons / meta (optional) */}
                <div className="flex items-center gap-4 justify-center text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">f</div>
                    <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">t</div>
                    <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">in</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-lg">
            {/* Example Google Maps iframe centered on a generic location. Replace src with your preferred location. */}
            <iframe
              title="company-location"
              className="w-full h-72 md:h-96 border-0"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43870898386!2d-74.11808600464597!3d40.70582502901443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b6f04aab0f%3A0x4ad5a7b1ffb1a0f5!2sNew%20York%2C%20USA!5e0!3m2!1sen!2s!4v1691656000000!5m2!1sen!2s"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
