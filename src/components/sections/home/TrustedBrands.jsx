import bajajLogo from "@/assets/brands/BAJAJ-AUTO.NS_BIG.png";
import varrocLogo from "@/assets/brands/VARROC.NS_BIG.png";
import nbcLogo from "@/assets/brands/NBCC.NS_BIG.png";
import enduranceLogo from "@/assets/brands/ENDURANCE.NS.png";
import gabrielLogo from "@/assets/brands/GABRIEL.NS_BIG.png";
import tvsLogo from "@/assets/brands/TVSMOTOR.NS_BIG.png";
import reveLogo from "@/assets/brands/Reve.png";
import goldstarLogo from "@/assets/brands/goldstar.jpeg";
import lumaxLogo from "@/assets/brands/Lumax.png";
const brands = [
  {
    name: "Bajaj",
    logo: bajajLogo,
  },
  {
    name: "Varroc",
    logo: varrocLogo,
  },
  {
    name: "NBC",
    logo: nbcLogo,
  },
  {
    name: "Endurance",
    logo: enduranceLogo,
  },
  {
    name: "Gabriel",
    logo: gabrielLogo,
  },
  {
    name: "TVS",
    logo: tvsLogo,
  },
  {
    name: "Reve",
    logo: reveLogo,
  },
  {
    name: "Lumax",
    logo: lumaxLogo,
  },
  {
    name: "Goldstar",
    logo: goldstarLogo,
  }
];

function TrustedBrands() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-[#1e1e1e] sm:text-3xl lg:text-4xl">
          Trusted brands
        </h2>

        <div className="mt-12 overflow-hidden lg:mt-16">
          <div className="brand-marquee-track">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="flex shrink-0 items-center gap-5 pr-5"
                aria-hidden={groupIndex === 1 ? "true" : undefined}
              >
                {brands.map((brand) => (
                  <div
                    key={`${groupIndex}-${brand.name}`}
                    className="flex h-24 w-40 shrink-0 items-center justify-center"
                  >
                    <img
                      src={brand.logo}
                      alt={groupIndex === 0 ? `${brand.name} logo` : ""}
                      className="max-h-20 w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default TrustedBrands;
