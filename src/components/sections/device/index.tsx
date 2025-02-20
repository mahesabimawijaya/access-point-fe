import Loading from "@/components/molecules/loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { deviceConverter, handleSort, sortConverter } from "@/helper/helper";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { Device, DeviceChartData } from "@/services/interfaces/response/entity/device";
import { FC, useMemo, useState } from "react";
import { Label, Pie, PieChart } from "recharts";

const chartConfig = {
  quantity: {
    label: "Devices",
  },
  smartphone: {
    label: "Smartphone",
    color: "hsl(var(--chart-1))",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
  laptop: {
    label: "Laptop",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const DeviceSection: FC = () => {
  const [sort, setSort] = useState("");
  const { data, isLoading } = FetchDataApiService({ path: "/devices", query: `sort=${sort}` });
  const deviceData = data?.data as Device[];
  const { data: count, isLoading: countLoading } = FetchDataApiService({ path: "/devices/count" });
  const countData = count?.data as DeviceChartData[];

  const totalDevices = useMemo(() => {
    return countData?.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [countData]);

  if (isLoading || countLoading) return <Loading />;

  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-center gap-5">
        <Card className="flex flex-col w-80">
          <CardHeader className="items-center pb-0">
            <CardTitle>
              <h2 className="text-xl">Device Type</h2>
            </CardTitle>
            <CardDescription>Device quantities</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
              <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie data={countData} dataKey="quantity" nameKey="device" innerRadius={60} strokeWidth={5}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                            <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                              {totalDevices.toLocaleString()}
                            </tspan>
                            <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                              Devices
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="flex-1 h-fit px-5 py-3">
          <CardTitle>
            <h2 className="text-xl mb-3">Device List</h2>
          </CardTitle>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mac Address</TableHead>
                <TableHead>Device Type</TableHead>
                <TableHead>Current AP</TableHead>
                <TableHead>
                  <Button variant="ghost" onClick={() => handleSort(sort, setSort)} className="px-0">
                    Bandwidth Used
                    {sortConverter(sort)}
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deviceData.map((item, i) => (
                <TableRow key={i} className="capitalize">
                  <TableCell>{item.macAddress}</TableCell>
                  <TableCell>{deviceConverter(item.deviceType)}</TableCell>
                  <TableCell>{item.sessions[0].accesspoint.name}</TableCell>
                  <TableCell>{item.sessions[0].bandwithUsed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
};

export default DeviceSection;
