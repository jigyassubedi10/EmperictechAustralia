import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import PrivacyPolicy from "@/components/sections/privacy-policy/privacy-policy";

export default function AboutPage() {
  return (
    <PageWrapper isInnerPage={true}>
      <PrivacyPolicy />
    </PageWrapper>
  );
}
