import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FC, ReactNode } from "react";

interface StatisticCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

const StatisticCard: FC<StatisticCardProps> = ({ title, description, children }) => {
  return (
    <Card className="flex-1 flex-shrink-0">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default StatisticCard;
