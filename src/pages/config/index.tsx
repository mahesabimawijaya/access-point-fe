import Container from "@/components/atoms/container";
import DashboardLayout from "@/components/layout/dashboard";
import ConfigSection from "@/components/sections/config";

export default function Config() {
  return (
    <DashboardLayout>
      <Container>
        <ConfigSection />
      </Container>
    </DashboardLayout>
  );
}
