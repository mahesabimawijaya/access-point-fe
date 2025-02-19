import Container from "@/components/atoms/container";
import ApTableSection from "@/components/sections/ap-table";
import ConfigSection from "@/components/sections/config";
import DeviceSection from "@/components/sections/device";
import NetworkSection from "@/components/sections/network";
import NotificationSection from "@/components/sections/notification";
import SecuritySection from "@/components/sections/security";

export default function Home() {
  return (
    <Container className="flex flex-col gap-8">
      <NetworkSection />
      <ApTableSection />
      <DeviceSection />
      <ConfigSection />
      <SecuritySection />
      <NotificationSection />
    </Container>
  );
}
