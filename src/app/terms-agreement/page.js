import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import TermsAgreement from "@/components/sections/terms-agreement/terms-agreement";

export default function AboutPage() {
  return (
    <PageWrapper isInnerPage={true}>
      <TermsAgreement />
    </PageWrapper>
  );
}
