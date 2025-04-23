import GetQuoteSection from "@/components/sections/heros/quote";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";


export const metadata = {
  title: "Get a Quote - Emperictech",
  description: "Request a free quote for our services.",
};

export default function GetQuotePage() {
  return (
    <PageWrapper isInnerPage={true}>
      <GetQuoteSection />
    </PageWrapper>
  );
}
