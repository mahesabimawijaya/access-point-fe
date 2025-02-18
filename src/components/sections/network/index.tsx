import StatisticCard from "@/components/molecules/statistic-card";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { AccessPoint, AccessPointCount } from "@/services/interfaces/response/entity/access-point";
import { FC } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const NetworkSection: FC = () => {
  const { data: count, isLoading } = FetchDataApiService({ path: "/accesspoints/count" });
  const countData = count?.data as AccessPointCount;
  const { data: ap, isLoading: apLoading } = FetchDataApiService({ path: "/accesspoints" });
  const apData = ap?.data as AccessPoint[];

  if (isLoading || apLoading) return <div>loading...</div>;
  console.log(apData);
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center gap-5 justify-center mb-10">
        <StatisticCard title="Total" description="Total access points">
          <h2 className="text-3xl font-semibold">{countData.total}</h2>
        </StatisticCard>
        <StatisticCard title="Active" description="Online access points">
          <h2 className="text-3xl font-semibold text-green-500">{countData.online}</h2>
        </StatisticCard>
        <StatisticCard title="Inactive" description="Offline access points">
          <h2 className="text-3xl font-semibold text-red-500">{countData.offline}</h2>
        </StatisticCard>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>SSID</TableHead>
            <TableHead>VLAN</TableHead>
            <TableHead>LastCheck</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apData.map((item, i) => (
            <TableRow key={i} className="capitalize">
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.ssid}</TableCell>
              <TableCell>{item.vlan}</TableCell>
              <TableCell>{new Date(item.lastCheck).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default NetworkSection;
