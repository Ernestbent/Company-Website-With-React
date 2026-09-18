import {
  MapPinned,
  PackageSearch,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  getCustomerCount,
  getItemCount,
  getSalesPersonCount,
} from "../../../services/externalAPI";

const UGANDA_DISTRICT_COUNT = 146;

function useCountUp(target) {
  const [displayCount, setDisplayCount] = useState(1);

  useEffect(() => {
    if (target === null) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const animationFrame = window.requestAnimationFrame(() => {
        setDisplayCount(target);
      });

      return () => window.cancelAnimationFrame(animationFrame);
    }

    const duration = 1800;
    const startedAt = performance.now();
    let animationFrame;

    function updateCount(now) {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayCount(Math.round(1 + (target - 1) * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateCount);
      }
    }

    animationFrame = window.requestAnimationFrame(updateCount);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [target]);

  return displayCount;
}

function MetricCard({ icon: Icon, label, value, error = false }) {
  const displayCount = useCountUp(value);

  return (
    <article className="group text-center">
      <div className="flex min-h-[210px] flex-col items-center justify-center rounded-xl border border-transparent bg-white px-6 py-10 shadow-[0_8px_30px_rgba(23,26,33,0.08)] transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-[#ed5929]/25 group-hover:shadow-[0_18px_40px_rgba(23,26,33,0.14)]">
        <Icon
          className="mb-6 h-10 w-10 text-[#ed5929] transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <p className="text-4xl font-bold tracking-tight text-[#171a21] sm:text-5xl">
          {error ? "Unavailable" : `${displayCount.toLocaleString()}+`}
        </p>
      </div>

      <h3 className="mt-5 text-base font-medium text-[#3d2d1d] transition-colors duration-300 group-hover:text-[#ed5929]">
        {label}
      </h3>

      <span className="sr-only" aria-live="polite">
        {error
          ? `${label} count unavailable`
          : value === null
            ? `Loading ${label.toLowerCase()} count`
            : `${value.toLocaleString()} ${label.toLowerCase()}`}
      </span>
    </article>
  );
}

function OurCustomers() {
  const [customerCount, setCustomerCount] = useState(null);
  const [salesPersonCount, setSalesPersonCount] = useState(null);
  const [itemCount, setItemCount] = useState(null);
  const [customerError, setCustomerError] = useState(false);
  const [salesPersonError, setSalesPersonError] = useState(false);
  const [itemError, setItemError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    getCustomerCount()
      .then((count) => {
        if (!cancelled) setCustomerCount(count);
      })
      .catch((error) => {
        console.error("Failed to load customer count:", error);
        if (!cancelled) setCustomerError(true);
      });

    getSalesPersonCount()
      .then((count) => {
        if (!cancelled) setSalesPersonCount(count);
      })
      .catch((error) => {
        console.error("Failed to load Sales Person count:", error);
        if (!cancelled) setSalesPersonError(true);
      });

    getItemCount()
      .then((count) => {
        if (!cancelled) setItemCount(count);
      })
      .catch((error) => {
        console.error("Failed to load Item count:", error);
        if (!cancelled) setItemError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="w-full bg-[#f7f7f7] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-medium text-[#171a21] sm:text-4xl">
          Where We Stand
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-4 lg:gap-8">
          <MetricCard
            icon={UsersRound}
            label="Our Customers"
            value={customerCount}
            error={customerError}
          />
          <MetricCard
            icon={UserRoundCheck}
            label="Sales Persons"
            value={salesPersonCount}
            error={salesPersonError}
          />
          <MetricCard
            icon={MapPinned}
            label="Districts"
            value={UGANDA_DISTRICT_COUNT}
          />
          <MetricCard
            icon={PackageSearch}
            label="Products"
            value={itemCount}
            error={itemError}
          />
        </div>
      </div>
    </section>
  );
}

export default OurCustomers;
