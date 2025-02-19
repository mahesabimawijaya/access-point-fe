import StatisticCard from "@/components/molecules/statistic-card";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { Firmware } from "@/services/interfaces/response/entity/firmware";
import { FC } from "react";
import ApTableSection from "../ap-table";

const ConfigSection: FC = () => {
  const { data: latest, isLoading: latestLoading } = FetchDataApiService({ path: "/firmwares/latest" });
  const latestData = latest?.data as Firmware;
  const { data, isLoading } = FetchDataApiService({ path: "/firmwares" });
  const firmwareData = data?.data as Firmware[];

  if (isLoading) return <div>loading...</div>;

  if (isLoading || latestLoading) return <div>loading...</div>;
  console.log(firmwareData);

  return (
    <section>
      <StatisticCard title="Latest Firmware Version" description="The latest firmware version">
        <h2 className="text-3xl font-semibold mb-1">{latestData.version}</h2>
        <p className="text-sm text-neutral-700">{latestData.description}</p>
      </StatisticCard>
      <Card className="px-5 py-3 mt-7">
        <CardTitle className="text-xl mb-2">Firmware Versions</CardTitle>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Version</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Access Points</TableHead>
              <TableHead>Release Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {firmwareData.map((item, i) => (
              <TableRow key={i} className="capitalize">
                <TableCell>{item.version}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.accesspoints.length}</TableCell>
                <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <ApTableSection latestFirmware={latestData} />
    </section>
  );
};

export default ConfigSection;
