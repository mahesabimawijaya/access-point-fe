import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { Log } from "@/services/interfaces/response/entity/log";
import { FC } from "react";

const SecuritySection: FC = () => {
  const { data, isLoading } = FetchDataApiService({ path: "/logs" });
  const logData = data?.data as Log[];

  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>Event Type</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logData.map((item, i) => (
            <TableRow key={i} className="capitalize">
              <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{item.eventType}</TableCell>
              <TableCell>{item.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default SecuritySection;
