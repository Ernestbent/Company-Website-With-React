import PageIntro from "../components/sections/PageIntro";

function ContactPage() {
  return (
    <PageIntro
      eyebrow="Get in touch"
      title="Contact AutoZone"
      description="Contact our team for product availability, wholesale enquiries, delivery information, or a quotation."
    >
      <div id="quote" className="mt-10 scroll-mt-8">
        <p className="font-medium text-[#171a21]">Quotation form coming next.</p>
      </div>
    </PageIntro>
  );
}

export default ContactPage;
