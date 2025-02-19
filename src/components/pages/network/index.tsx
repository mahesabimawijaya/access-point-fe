import Container from "@/components/atoms/container";
import ApTableSection from "@/components/sections/ap-table";
import NetworkSection from "@/components/sections/network";

export default function Network() {
  return (
    <Container>
      <NetworkSection />
      <ApTableSection />
    </Container>
  );
}
