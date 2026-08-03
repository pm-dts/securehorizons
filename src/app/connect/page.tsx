"use client";

import { useState } from "react";

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
    open: false,
    success: true,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setPopup({
      open: false,
      success: true,
      message: "",
    });

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/uebA3dEQ2eJF6G45Nii9/webhook-trigger/2f6c95e3-3b56-4306-b54e-f663f468c6dd",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }

      setPopup({
        open: true,
        success: true,
        message: "Your message has been sent successfully!",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setPopup({
        open: true,
        success: false,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="p-8 md:p-12">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              Contact Us
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Let's <span className="text-[#0B5FFF]">Connect</span>
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Have questions about our mortgage solutions? Fill out the form
              below and our team will get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0B5FFF] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0B5FFF] focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (305) 456 7890"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0B5FFF] focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message *
              </label>
              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0B5FFF] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#0B5FFF] px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {popup.open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 animate-in fade-in duration-200">
              <div className="w-full max-w-md scale-100 rounded-2xl bg-white p-8 shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="flex justify-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full text-3xl ${
                      popup.success
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {popup.success ? "✓" : "✕"}
                  </div>
                </div>

                <h3 className="mt-5 text-center text-2xl font-bold text-slate-900">
                  {popup.success ? "Success!" : "Oops!"}
                </h3>

                <p className="mt-3 text-center text-slate-600">
                  {popup.message}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setPopup((prev) => ({
                      ...prev,
                      open: false,
                    }))
                  }
                  className={`mt-8 w-full rounded-xl px-6 py-3 font-semibold text-white transition ${
                    popup.success
                      ? "bg-[#0B5FFF]-600 hover:bg-[#0B5FFF]-700"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
