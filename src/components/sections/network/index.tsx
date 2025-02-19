import StatisticCard from "@/components/molecules/statistic-card";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { AccessPointCount, AccessPointReport } from "@/services/interfaces/response/entity/access-point";
import { FC } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const chartConfig = {
  APLobby: {
    label: "AP - Lobby",
    color: "hsl(var(--chart-1))",
  },
  APOffice: {
    label: "AP - Office",
    color: "hsl(var(--chart-2))",
  },
  APHall: {
    label: "AP - Hall",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const NetworkSection: FC = () => {
  const { data: count, isLoading } = FetchDataApiService({ path: "/accesspoints/count" });
  const countData = count?.data as AccessPointCount;
  const { data: apmetrics, isLoading: apLoading } = FetchDataApiService({ path: "/accesspoints/apmetrics" });
  const apMetricsData = apmetrics?.data as AccessPointReport[];
  const { data: signal, isLoading: signalLoading } = FetchDataApiService({ path: "/accesspoints/signal" });
  const signalData = signal?.data as AccessPointReport[];

  if (isLoading || apLoading || signalLoading) return <div>loading...</div>;

  return (
    <section>
      <StatisticCard title="Access Point" description="Access points network metrics">
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
        <div className="flex items-center justify-center gap-5">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>
                <h2 className="text-xl">Bandwith Usage</h2>
              </CardTitle>
              <CardDescription>Access points metric</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={apMetricsData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          });
                        }}
                        indicator="dot"
                      />
                    }
                  />
                  <Line dataKey="APLobby" type="monotone" stroke="var(--color-APLobby)" strokeWidth={2} dot={false} />
                  <Line dataKey="APOffice" type="monotone" stroke="var(--color-APOffice)" strokeWidth={2} dot={false} />
                  <Line dataKey="APHall" type="monotone" stroke="var(--color-APHall)" strokeWidth={2} dot={false} />
                  <ChartLegend content={<ChartLegendContent />} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>
                <h2 className="text-xl">Signal Strength</h2>
              </CardTitle>
              <CardDescription>Access signal strength</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={signalData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          });
                        }}
                        indicator="dot"
                      />
                    }
                  />
                  <Line dataKey="APLobby" type="monotone" stroke="var(--color-APLobby)" strokeWidth={2} dot={false} />
                  <Line dataKey="APOffice" type="monotone" stroke="var(--color-APOffice)" strokeWidth={2} dot={false} />
                  <Line dataKey="APHall" type="monotone" stroke="var(--color-APHall)" strokeWidth={2} dot={false} />
                  <ChartLegend content={<ChartLegendContent />} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </StatisticCard>
    </section>
  );
};

export default NetworkSection;
