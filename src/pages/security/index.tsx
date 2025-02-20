import Container from "@/components/atoms/container";
import DashboardLayout from "@/components/layout/dashboard";
import SecuritySection from "@/components/sections/security";

export default function Security() {
  return (
    <DashboardLayout>
      <Container>
        <SecuritySection />
      </Container>
    </DashboardLayout>
  );
}
