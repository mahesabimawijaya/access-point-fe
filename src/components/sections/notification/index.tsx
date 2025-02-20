import Loading from "@/components/molecules/loading";
import StatisticCard from "@/components/molecules/statistic-card";
import { Button } from "@/components/ui/button";
import { handleSort, notificationConverter, sortConverter } from "@/helper/helper";
import { FetchDataApiService } from "@/services/api/FetchApi.service";
import { Notification } from "@/services/interfaces/response/entity/notification";
import { FC, useState } from "react";

const NotificationSection: FC = () => {
  const [sort, setSort] = useState("");

  const { data, isLoading } = FetchDataApiService({ path: "/notifications", query: `sort=${sort}` });
  const notificationData = data?.data as Notification[];

  if (isLoading) return <Loading />;

  return (
    <section>
      <StatisticCard title="Notifications" description="Total notifications">
        <div className="flex justify-end">
          <Button variant="outline" onClick={() => handleSort(sort, setSort)} className="mb-5">
            Sort
            {sortConverter(sort)}
          </Button>
        </div>
        <div className="flex flex-col gap-3">{notificationData.map((item, i) => notificationConverter(item, i))}</div>
      </StatisticCard>
    </section>
  );
};

export default NotificationSection;
