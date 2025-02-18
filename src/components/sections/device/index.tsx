import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { Device } from "@/services/interfaces/response/entity/device";
import { FC } from "react";

const DeviceSection: FC = () => {
  const { data, isLoading } = FetchDataApiService({ path: "/devices" });
  const deviceData = data?.data as Device[];

  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mac Address</TableHead>
            <TableHead>Device Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deviceData.map((item, i) => (
            <TableRow key={i} className="capitalize">
              <TableCell>{item.macAddress}</TableCell>
              <TableCell>{item.deviceType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default DeviceSection;
