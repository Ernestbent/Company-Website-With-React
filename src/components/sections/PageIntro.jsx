function PageIntro({ eyebrow, title, description, children }) {
  return (
    <section className="min-h-[calc(100vh-90px)] bg-white px-6 py-20 sm:px-10 lg:px-[60px]">
      <div className="mx-auto max-w-[1320px]">
        <p className="text-brand text-sm font-medium uppercase tracking-[0.14em]">
          {eyebrow}
        </p>
        <h1 className="mb-5 mt-3 text-4xl font-normal tracking-tight text-[#171a21] sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-gray-600">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}

export default PageIntro;
