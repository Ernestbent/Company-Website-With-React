const contactDetails = [
  {
    label: "OUR SHOWROOM",
    value: "Autozone Professional Ltd, Kampala, Uganda",
  },
  {
    label: "PHONE CONTACT",
    value: "0755 829642",
    href: "tel:+256755829642",
  },
  {
    label: "BUSINESS HOURS",
    value: "Monday - Saturday: 8am - 6pm",
  },
];

function MapLocationSection() {
  return (
    <section
      className="w-full bg-white py-10 sm:py-12 lg:py-14"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3">
            <span
              className="h-[3px] w-9 bg-[#ed5929]"
              aria-hidden="true"
            />

            <p className="text-xs font-semibold tracking-[2px] text-[#ed5929] sm:text-[15px]">
              FIND US
            </p>
          </div>

          <h2
            id="location-heading"
            className="mt-4 text-3xl font-bold text-[#1e1e1e] sm:text-4xl lg:text-5xl"
          >
            Visit our shop
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#666666] sm:text-base">
            Visit Autozone Professional Ltd for wholesale parts procurement
            and service support.
          </p>
        </div>

        {/* Location Content */}
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

          {/* Contact Details */}
          <div className="w-full lg:max-w-[430px]">

            <dl className="space-y-7">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-sm font-bold tracking-[1px] text-[#ed5929]">
                    {detail.label}
                  </dt>

                  <dd className="mt-2 text-lg font-normal leading-7 text-[#666666]">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="transition-colors hover:text-[#ed5929]"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

          </div>

          {/* Map */}
          <div className="w-full lg:max-w-[640px]">
            <iframe
              src="https://www.google.com/maps?q=Autozone%20Professional%2C%20Kampala%2C%20Uganda&z=17&output=embed"
              title="Autozone Professional Ltd showroom location"
              className="h-[280px] w-full rounded-lg object-cover sm:h-[350px] lg:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default MapLocationSection;
