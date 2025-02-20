import Container from "@/components/atoms/container";
import DashboardLayout from "@/components/layout/dashboard";
import ApTableSection from "@/components/sections/ap-table";
import NetworkSection from "@/components/sections/network";

export default function Network() {
  return (
    <DashboardLayout>
      <Container>
        <NetworkSection />
        <ApTableSection />
      </Container>
    </DashboardLayout>
  );
}
