import { useState } from "react";
import nishAvatar from "@/assets/brands/nish.jpeg";
import simbaAvatar from "@/assets/brands/Simba.jpeg";

const testimonials = [
  {
    id: 1,
    review:
      "Autozone Professional Ltd has become our go-to supplier for BAJAJ and VARROC parts. The stock is reliable, the team knows the products, and delivery is fast enough to keep our workshop moving.",
    name: "NISH Auto Parts",
    role: "Workshop Owner, Kampala",
    image: nishAvatar,
  },
  {
    id: 2,
    review:
      "We buy in bulk for our retail network and the team at Autozone helps us manage stock levels, confirm fitment, and get orders delivered quickly across Kampala.",
    name: "Kato Moses",
    role: "Retail Chain Manager",
    image: null,
  },
  {
    id: 3,
    review:
      "The quality of the ENDURANCE and NBC parts is consistent, and the pricing is competitive. We recommend Autozone to other boda boda spare parts buyers because the service is reliable.",
    name: "Simba Automotive",
    role: "Wholesaler, Kampala",
    image: simbaAvatar,
  },
];

function TestimonialAvatar({ image, name }) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = name.trim().split(/\s+/).slice(0, 2).map((word) => word[0]).join("");

  return (
    <div className="absolute -top-16 left-1/2 flex h-32 w-32 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-[6px] border-white bg-[#f5ede6] shadow-sm">
      {image && !imageFailed ? (
        <img
          src={image}
          alt={name}
          width={128}
          height={128}
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <span
          role="img"
          aria-label={`Portrait placeholder for ${name}`}
          className="text-3xl font-medium text-[#3d2d1d]"
        >
          {initials}
        </span>
      )}
    </div>
  );
}

function Testimonials() {
  return (
    <section
      className="w-full bg-[#f7f7f7] py-16 sm:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <header className="mx-auto flex max-w-[850px] flex-col items-center text-center">
          <h2
            id="testimonials-heading"
            className="text-center text-[40px] font-semibold leading-[1.15] text-brand sm:text-[48px] lg:text-[54px]"
          >
            What our customers say
          </h2>

          <p className="mt-5 w-full text-center text-base font-normal leading-7 text-[#666666] sm:text-lg">
            Real feedback from motorbike parts buyers
          </p>
        </header>

        {/* Testimonial Cards */}
        <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-24 pt-16 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative flex min-h-[270px] flex-col rounded-xl border border-[#e5e5e5] bg-white px-6 pb-6 pt-24 text-center sm:px-7 sm:pb-7"
            >
              <TestimonialAvatar
                key={testimonial.image || testimonial.name}
                image={testimonial.image}
                name={testimonial.name}
              />

              {/* Stars */}
              <div
                className="flex justify-center gap-1 text-[#ed5929]"
                aria-label="5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-6 text-[#555555] sm:text-[15px]">
                <span className="text-xl text-[#ed5929]">“</span>
                {testimonial.review}
                <span className="text-xl text-[#ed5929]">”</span>
              </p>

              {/* Customer */}
              <div className="mt-auto pt-5">
                <h3 className="text-[15px] font-bold text-[#ed5929]">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-xs text-[#777777]">
                  {testimonial.role}
                </p>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
