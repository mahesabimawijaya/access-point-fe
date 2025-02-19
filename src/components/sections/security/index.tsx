import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { permissions } from "@/helper/data";
import { deviceConverter, roleConverter } from "@/helper/helper";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { Log } from "@/services/interfaces/response/entity/log";
import { Pencil } from "lucide-react";
import { FC } from "react";

const SecuritySection: FC = () => {
  const { data, isLoading } = FetchDataApiService({ path: "/logs" });
  const logData = data?.data as Log[];

  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <section>
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="text-xl">Roles & Permission</CardTitle>
          <CardDescription>Manage user roles</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-5">
          {permissions.map((permission, i) => (
            <Card className="flex-1 flex-shrink-0" key={i}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between mb-1">
                  {roleConverter(permission.role)}
                  <Dialog>
                    <DialogTrigger>
                      <Pencil size={20} />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="flex items-center justify-between">{roleConverter(permission.role)}</DialogTitle>
                        <DialogDescription>{permission.description}</DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col text-sm">
                        {permission.permissions.map((item, i) => (
                          <p key={i}>&#8226; {item}</p>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardTitle>
                <CardDescription>{permission.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col text-sm">
                  {permission.permissions.map((item, i) => (
                    <p key={i}>&#8226; {item}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
      <Card className="p-5">
        <CardTitle className="text-xl mb-3">Logs</CardTitle>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Event Type</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Access Point</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>User</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logData.map((item, i) => (
              <TableRow key={i} className="capitalize">
                <TableCell>{new Date(item.createdAt).toLocaleString()}</TableCell>
                <TableCell>{item.eventType}</TableCell>
                <TableCell>{item.message}</TableCell>
                <TableCell>{item.accesspoint.name}</TableCell>
                <TableCell>{deviceConverter(item.device.deviceType)}</TableCell>
                <TableCell>{item.user.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </section>
  );
};

export default SecuritySection;
