import { useState } from "react";

const initialFormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function ContactFormSection() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      return;
    }

    setSubmitted(true);

    console.log("Form submitted:", formValues);

    // Later we will send formValues to the backend/API.
  };

  return (
    <section
      className="w-full bg-[#f7f7f7] py-16 sm:py-20 lg:py-24"
      aria-label="Contact details and message form"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Contact Details */}
          <div className="flex min-h-[420px] w-full items-center rounded-xl border border-[#eaeaea] bg-white p-8 sm:p-10 lg:min-h-[680px] lg:p-12">
            <div>
              <h2 className="text-3xl font-medium text-[#171a21] sm:text-4xl">
                Contact Us
              </h2>

              <address className="mt-10 space-y-9 not-italic text-base leading-8 text-[#666666] sm:space-y-10">
                <p>
                  <strong className="font-semibold text-[#3d2d1d]">
                    Call:
                  </strong>{" "}
                  <a
                    href="tel:+256755829642"
                    className="transition-colors hover:text-[#ed5929]"
                  >
                    0755 829642
                  </a>
                </p>

                <p>
                  <strong className="font-semibold text-[#3d2d1d]">
                    WhatsApp:
                  </strong>{" "}
                  <a
                    href="https://wa.me/256755829642"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#ed5929]"
                  >
                    0755 829642
                  </a>
                </p>

                <p>
                  <strong className="font-semibold text-[#3d2d1d]">
                    Email:
                  </strong>{" "}
                  <a
                    href="mailto:crm@autozonepro.org"
                    className="underline underline-offset-2 transition-colors hover:text-[#ed5929]"
                  >
                    crm@autozonepro.org
                  </a>
                </p>

                <p>
                  <strong className="font-semibold text-[#3d2d1d]">
                    Showroom:
                  </strong>{" "}
                  Autozone Professional Ltd, Kampala, Uganda
                </p>

                <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4">
                  <strong className="shrink-0 font-semibold text-[#3d2d1d]">
                    Business Hours:
                  </strong>
                  <ul className="space-y-1">
                    <li>Monday: 9am - 6pm</li>
                    <li>Tuesday: 9am - 6pm</li>
                    <li>Wednesday: 9am - 6pm</li>
                    <li>Thursday: 9am - 6pm</li>
                    <li>Friday: 9am - 6pm</li>
                    <li>Saturday: 9am - 4pm</li>
                    <li className="font-medium text-[#c92a2a]">
                      Sunday: Closed
                    </li>
                  </ul>
                </div>
              </address>
            </div>
          </div>

          {/* =========================
              CONTACT FORM
          ========================== */}
          <form
            onSubmit={handleSubmit}
            className="w-full rounded-xl border border-[#eaeaea] bg-white p-6 sm:p-8 lg:p-10"
          >
            {/* Form Heading */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e1e1e] sm:text-[28px]">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#666666]">
                Fill out the details below and we will get back to you within
                24 business hours.
              </p>
            </div>

            {/* Name + Email */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-[#1e1e1e]"
                >
                  Your Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-2 h-12 w-full rounded-md border border-[#eaeaea] bg-white px-4 text-sm text-[#1e1e1e] outline-none transition focus:border-[#ed5929] focus:ring-1 focus:ring-[#ed5929]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#1e1e1e]"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="mt-2 h-12 w-full rounded-md border border-[#eaeaea] bg-white px-4 text-sm text-[#1e1e1e] outline-none transition focus:border-[#ed5929] focus:ring-1 focus:ring-[#ed5929]"
                />
              </div>
            </div>

            {/* Phone + Subject */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-[#1e1e1e]"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formValues.phone}
                  onChange={handleChange}
                  placeholder="0755 829642"
                  className="mt-2 h-12 w-full rounded-md border border-[#eaeaea] bg-white px-4 text-sm text-[#1e1e1e] outline-none transition focus:border-[#ed5929] focus:ring-1 focus:ring-[#ed5929]"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-[#1e1e1e]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formValues.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about Spare Parts"
                  className="mt-2 h-12 w-full rounded-md border border-[#eaeaea] bg-white px-4 text-sm text-[#1e1e1e] outline-none transition focus:border-[#ed5929] focus:ring-1 focus:ring-[#ed5929]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-4">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-[#1e1e1e]"
              >
                Message *
              </label>

              <textarea
                id="message"
                name="message"
                required
                value={formValues.message}
                onChange={handleChange}
                placeholder="Tell us about your order or service request..."
                className="mt-2 h-[120px] w-full resize-none rounded-md border border-[#eaeaea] bg-white px-4 py-3 text-sm text-[#1e1e1e] outline-none transition focus:border-[#ed5929] focus:ring-1 focus:ring-[#ed5929]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-5 flex h-12 w-full items-center justify-center gap-3 rounded-md bg-[#ed5929] text-[15px] font-bold text-white transition-colors hover:bg-[#d94d20]"
            >
              SEND MESSAGE

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>

            {/* Temporary Success Message */}
            {submitted && (
              <p
                className="mt-4 text-center text-sm font-medium text-green-700"
                role="status"
              >
                Your message has been submitted.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
