import StatisticCard from "@/components/molecules/statistic-card";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { Firmware } from "@/services/interfaces/response/entity/firmware";
import { FC, useState } from "react";
import ApTableSection from "../ap-table";
import { Button } from "@/components/ui/button";
import { handleSort, sortConverter } from "@/helper/helper";
import Loading from "@/components/molecules/loading";

const ConfigSection: FC = () => {
  const [sort, setSort] = useState("");
  const { data: latest, isLoading: latestLoading } = FetchDataApiService({ path: "/firmwares/latest" });
  const latestData = latest?.data as Firmware;
  const { data, isLoading } = FetchDataApiService({ path: "/firmwares", query: `sort=${sort}` });
  const firmwareData = data?.data as Firmware[];

  if (isLoading || latestLoading) return <Loading />;

  return (
    <section>
      <StatisticCard
        title="Latest Firmware Version"
        description="The latest firmware version"
        bgColor="bg-gradient-to-r from-[#E91B23] via-[#FF5722] to-[#FF9800] text-white"
        descClassName="text-neutral-200"
      >
        <h2 className="text-3xl font-semibold mb-1">{latestData.version}</h2>
        <p className="text-sm text-neutral-200">{latestData.description}</p>
      </StatisticCard>
      <Card className="px-5 py-3 mt-7">
        <CardTitle className="text-xl mb-2">Firmware Versions</CardTitle>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort(sort, setSort)} className="px-0">
                  Version
                  {sortConverter(sort)}
                </Button>
              </TableHead>
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
