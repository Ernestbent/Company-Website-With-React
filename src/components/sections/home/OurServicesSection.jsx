import { Link } from "react-router-dom";
import deliveryImage from "@/assets/delivery.jpg";
import genuinePartsImage from "@/assets/genuine parts.jpg";
import transportationImage from "@/assets/transportation.jpg";

const services = [
  {
    title: "Spare Parts Supply",
    image: deliveryImage,
    imageAlt: "Motorbike spare parts ready for delivery",
    linkText: "Learn more about supply",
  },
  {
    title: "Genuine Parts",
    image: genuinePartsImage,
    imageAlt: "Genuine motorbike parts",
    linkText: "Learn more about genuine parts",
  },
  {
    title: "Fast Delivery",
    image: transportationImage,
    imageAlt: "Fast delivery across Kampala and Uganda",
    linkText: "Learn more about delivery",
  },
];

function OurServicesSection() {
  return (
    <section
      className="bg-[#f7f7f7] px-6 py-20 sm:px-10 lg:px-[60px] lg:py-24"
      aria-labelledby="our-services-heading"
    >
      <div className="mx-auto max-w-[1280px]">
        <header className="mx-auto max-w-[760px] text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="bg-brand h-[3px] w-9" aria-hidden="true" />
            <p className="text-brand text-[14px] font-medium tracking-[0.14em]">
              OUR SERVICES
            </p>
          </div>

          <h2
            id="our-services-heading"
            className="m-0 text-[36px] font-normal leading-[1.15] tracking-[-0.02em] !text-[#1e1e1e] sm:text-[42px] lg:text-[48px]"
          >
            How we support motorbike retailers and wholesalers
          </h2>

          <p className="mt-5 text-base leading-7 text-[#666666]">
            From stock planning to fast delivery, we help customers source the
            right parts with confidence.
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, image, imageAlt, linkText }) => (
            <article
              key={title}
              className="border-b-brand-brown min-h-[280px] overflow-hidden border border-b-4 border-[#eaeaea] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={image}
                alt={imageAlt}
                className="block aspect-[4/3] w-full object-cover object-center"
              />

              <div className="p-5">
                <h3 className="text-[19px] font-medium text-[#1e1e1e]">
                  {title}
                </h3>

                <Link
                  to="/services"
                  className="hover:text-brand-brown mt-4 inline-flex items-center gap-3 text-[15px] font-medium text-[#1e1e1e] transition-colors"
                >
                  {linkText}
                  <span className="text-brand-brown text-xl" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServicesSection;
