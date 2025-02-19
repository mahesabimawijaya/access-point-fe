import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { statusConverter } from "@/helper/helper";
import usePath from "@/hooks/use-path";
import { useToast } from "@/hooks/use-toast";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { PatchDataApiService } from "@/services/api/PatchApi.service";
import { AccessPoint } from "@/services/interfaces/response/entity/access-point";
import { Firmware } from "@/services/interfaces/response/entity/firmware";
import { Loader2 } from "lucide-react";
import { FC, useState } from "react";

interface ApTableSectionProps {
  latestFirmware?: Firmware | null;
}

const ApTableSection: FC<ApTableSectionProps> = ({ latestFirmware }) => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const path = usePath(1);
  const { data: ap, isLoading, refetch } = FetchDataApiService({ path: "/accesspoints" });
  const apData = ap?.data as AccessPoint[];
  const { patchDataApi, isLoading: editLoading } = PatchDataApiService();

  const handleUpdateAll = async () => {
    const res = await patchDataApi({ path: "/accesspoints" });
    console.log(res);
    if (res.statusCode === 200) {
      toast({
        title: "Update Success",
        description: "All access points have been updated",
      });
      refetch();
      setIsDialogOpen(false); // ✅ Close the dialog after success
    } else {
      toast({
        title: "Update Failed",
        description: "Failed to update access points",
      });
    }
  };

  const handleUpdate = async (id: string) => {
    const res = await patchDataApi({ path: "/accesspoints", id: id });
    console.log(res);
    if (res.statusCode === 200) {
      toast({
        title: "Update Success",
        description: "Access points have been updated",
      });
      refetch();
    } else {
      toast({
        title: "Update Failed",
        description: "Failed to update access points",
      });
    }
  };

  if (isLoading) return <div>loading...</div>;

  return (
    <section>
      <Card className="px-5 py-3 mt-10">
        <CardTitle>
          <div className="flex justify-between items-center">
            <h2 className="text-xl mb-3">Access Points</h2>
            {path === "config" && (
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <Button className="my-3" onClick={() => setIsDialogOpen(true)}>
                  Update All
                </Button>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>This action cannot be undone. This will update all the access points firmware into the latest version</DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center w-full gap-3">
                    <Button onClick={() => setIsDialogOpen(false)} variant="destructive" className="flex-1">
                      No
                    </Button>
                    <Button onClick={handleUpdateAll} disabled={editLoading} className="flex-1">
                      {editLoading ? <Loader2 className="animate-spin" /> : "Yes"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </CardTitle>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Version</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>SSID</TableHead>
              <TableHead>VLAN</TableHead>
              <TableHead>Temperature</TableHead>
              <TableHead>Power Status</TableHead>
              <TableHead className="text-center">{path === "config" ? "Action" : "Connected Devices"}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apData.map((item, i) => (
              <TableRow key={i} className="capitalize">
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.firmware.version}</TableCell>
                <TableCell className={`${statusConverter(item.status)} flex items-center gap-2`}>
                  <svg height="10" width="10" xmlns="http://www.w3.org/2000/svg">
                    <circle r="5" cx="5" cy="5" fill="currentColor" />
                  </svg>{" "}
                  {item.status}
                </TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.ssid}</TableCell>
                <TableCell>{item.vlan}</TableCell>
                <TableCell>{item.temperature}&deg;C</TableCell>
                <TableCell>{item.powerStatus}</TableCell>
                {path === "config" ? (
                  <TableCell className="text-center">
                    <Button onClick={() => handleUpdate(item.id)} disabled={latestFirmware?.version === item.firmware.version}>
                      Update
                    </Button>
                  </TableCell>
                ) : (
                  <TableCell className="text-center">{item.sessions.length}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </section>
  );
};

export default ApTableSection;
