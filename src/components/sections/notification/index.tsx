import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { Notification } from "@/services/interfaces/response/entity/notification";
import { FC } from "react";

const NotificationSection: FC = () => {
  const { data, isLoading } = FetchDataApiService({ path: "/notifications" });
  const notificationData = data?.data as Notification[];

  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notificationData.map((item, i) => (
            <TableRow key={i} className="capitalize">
              <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default NotificationSection;
