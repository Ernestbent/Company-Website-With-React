import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/hero-bg.jpg";
import heroBgTwo from "../../assets/Hero 2.jpg";
import heroBgThree from "../../assets/Hero 3.jpg";
import heroBgFour from "../../assets/Hero 4.jpg";

const heroImages = [heroBg, heroBgTwo, heroBgThree, heroBgFour];

function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((currentImage) =>
        (currentImage + 1) % heroImages.length
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex min-h-[600px] w-full items-center overflow-hidden bg-[#171a21]"
    >
      {heroImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full transform-gpu object-cover object-center transition-[opacity,transform] duration-[2000ms] ease-[cubic-bezier(0.45,0,0.55,1)] will-change-[opacity,transform] ${
            index === activeImage
              ? "scale-100 opacity-100"
              : "scale-[1.025] opacity-0"
          }`}
        />
      ))}

      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,18,0.82)_0%,rgba(6,13,18,0.58)_38%,rgba(6,13,18,0.18)_72%,rgba(6,13,18,0.08)_100%)]"
        aria-hidden="true"
      />

      <div
        key={activeImage}
        className="hero-content-enter relative z-10 w-full px-6 py-20 sm:px-10 lg:px-[60px]"
      >
        <div className="max-w-[620px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="bg-brand h-0.5 w-8" aria-hidden="true" />
            <p className="text-brand text-[13px] font-medium uppercase tracking-[0.14em]">
              Motorbike spare parts
            </p>
          </div>

          <h1 className="m-0 max-w-[590px] text-[42px] font-normal leading-[1.12] tracking-[-0.02em] !text-white sm:text-[50px] lg:text-[58px]">
            Your Trusted Source
            <br />
            for Quality
            <br />
            Motorbike
          </h1>

          <p className="mt-6 max-w-[570px] text-[15px] leading-6 text-gray-200">
            Autozone Professional Ltd supplies and sells motorbike spare parts
            to retailers and wholesalers across Uganda, backed by trusted brands
            and reliable delivery.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="bg-brand hover:bg-brand-hover inline-flex h-10 items-center justify-center gap-2 rounded-md px-5 text-[12px] font-semibold text-white transition-colors"
            >
              OUR PRODUCTS
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white px-5 text-[12px] font-semibold text-white transition-colors hover:bg-white hover:text-[#171a21]"
            >
              CONTACT US
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
