import StatisticCard from "@/components/molecules/statistic-card";
import { notificationConverter } from "@/helper/helper";
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
      <StatisticCard title="Notifications" description="Total notifications">
        <div className="flex flex-col gap-3">{notificationData.map((item, i) => notificationConverter(item, i))}</div>
      </StatisticCard>
    </section>
  );
};

export default NotificationSection;
