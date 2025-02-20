import Container from "@/components/atoms/container";
import DashboardLayout from "@/components/layout/dashboard";
import DeviceSection from "@/components/sections/device";
export default function Device() {
  return (
    <DashboardLayout>
      <Container>
        <DeviceSection />
      </Container>
    </DashboardLayout>
  );
}
