import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { Firmware } from "@/services/interfaces/response/entity/firmware";
import { FC } from "react";

const ConfigSection: FC = () => {
  const { data, isLoading } = FetchDataApiService({ path: "/firmwares" });
  const firmwareData = data?.data as Firmware[];

  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Version</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {firmwareData.map((item, i) => (
            <TableRow key={i} className="capitalize">
              <TableCell>{item.version}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default ConfigSection;
