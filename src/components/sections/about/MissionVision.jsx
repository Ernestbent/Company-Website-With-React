import happyImage from "@/assets/happy.jpg";
import trustedImage from "@/assets/trusted.jpg";
import purpouseImage from "@/assets/purpouse.jpg";

function SectionImage({ src, alt }) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full items-center justify-center bg-[#e7e2dd] px-6 text-center font-medium text-[#3d2d1d]"
      >
        {alt}
      </div>
    );
  }

  return <img src={src} alt={alt} className="h-full w-full object-cover" />;
}

const missionImage = happyImage;
const visionImage = trustedImage;
const purposeImage = purpouseImage;

function MissionVision() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {/* Mission Image */}
          <div className="h-[260px] sm:h-[300px] lg:h-[300px]">
            <SectionImage
              src={missionImage}
              alt="Autozone Professional Ltd mission"
            />
          </div>

          {/* Mission Text */}
          <div className="flex min-h-[260px] items-center bg-white p-7 sm:min-h-[300px] sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-[#1e1e1e]">
                Our Mission
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#555555] sm:text-[15px]">
                To provide retailers and wholesalers with reliable access to
                quality motorbike spare parts, supported by dependable service
                and efficient delivery.
              </p>
            </div>
          </div>

          {/* Vision Image */}
          <div className="h-[260px] sm:h-[300px] lg:h-[300px]">
            <SectionImage
              src={visionImage}
              alt="Autozone Professional Ltd vision"
            />
          </div>

          {/* Vision Text */}
          <div className="flex min-h-[260px] items-center bg-white p-7 sm:min-h-[300px] sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-[#1e1e1e]">
                Our Vision
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#555555] sm:text-[15px]">
                To be a trusted and preferred motorbike spare parts supplier
                in Uganda and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Purpose Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {/* Empty spaces on desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Purpose Image */}
          <div className="h-[260px] sm:h-[300px] lg:h-[300px]">
            <SectionImage
              src={purposeImage}
              alt="Autozone Professional Ltd purpose"
            />
          </div>

          {/* Purpose Text */}
          <div className="flex min-h-[260px] items-center bg-white p-7 sm:min-h-[300px] sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-[#1e1e1e]">
                Our Purpose
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#555555] sm:text-[15px]">
                To keep businesses and riders moving by making quality
                motorbike spare parts accessible, reliable, and convenient.
              </p>
            </div>
          </div>

          {/* Empty space on desktop */}
          <div className="hidden lg:block"></div>
        </div>

      </div>
    </section>
  );
}

export default MissionVision;
