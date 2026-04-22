import { Metadata } from "next";
import {handleSubmit} from '@/actions/constact'

export const metadata: Metadata = {
  title: "Contact Us | MRGC",
};

export default async function ContactPage() {


  return (
    <main className="py-20 px-6 md:px-16 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 w-full">
        
        {/* LEFT: FORM */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Send us a message</h1>
          <form className="space-y-6" action={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--color-primary)]" placeholder="John" name="firstName" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--color-primary)]" placeholder="Doe"  name="lastName" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--color-primary)]" placeholder="john@company.com" name="email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How can we help you?</label>
              <textarea rows={4} name="message" className="w-full  p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--color-primary)]" placeholder="Tell us about your project or tender..."></textarea>
            </div>
            <button className="w-full bg-[var(--color-accent)] text-white font-bold py-4 rounded-md hover:opacity-90 transition">
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">Let's discuss your next big win.</h2>
          <p className="text-lg text-gray-600 mb-10">
            Whether you need help bidding on a government tender, expanding your exports, or navigating public procurement, our experts are ready to assist.
          </p>

          <div className="space-y-6 text-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[var(--color-primary)] font-bold">📍</div>
              <div>
                <p className="font-bold">Our Office</p>
                <p className="text-gray-600"></p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[var(--color-primary)] font-bold">📞</div>
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-gray-600">+91</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[var(--color-primary)] font-bold">✉️</div>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-gray-600"></p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-bold shadow-md hover:bg-green-600 transition">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}