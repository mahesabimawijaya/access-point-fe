import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FC, ReactNode } from "react";

interface StatisticCardProps {
  title: string;
  description: string;
  bgColor?: string;
  descClassName?: string;
  children: ReactNode;
}

const StatisticCard: FC<StatisticCardProps> = ({ title, description, bgColor, descClassName, children }) => {
  return (
    <Card className={`w-full flex-1 flex-shrink-0 ${bgColor}`}>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className={descClassName}>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default StatisticCard;
