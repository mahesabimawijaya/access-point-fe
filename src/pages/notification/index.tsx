import Container from "@/components/atoms/container";
import DashboardLayout from "@/components/layout/dashboard";
import NotificationSection from "@/components/sections/notification";

export default function Notification() {
  return (
    <DashboardLayout>
      <Container>
        <NotificationSection />
      </Container>
    </DashboardLayout>
  );
}
