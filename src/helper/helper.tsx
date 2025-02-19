import { CircleAlert, Info, Laptop, Monitor, Smartphone, TriangleAlert, User, UserCog, UserPlus } from "lucide-react";
import { Notification } from "@/services/interfaces/response/entity/notification";
import { Card } from "@/components/ui/card";

export const statusConverter = (status: string) => {
  if (status === "online") return "text-green-500";
  if (status === "offline") return "text-red-500";
};

export const deviceConverter = (device: string) => {
  if (device === "smartphone") {
    return (
      <span className="flex items-center gap-3">
        <Smartphone size={20} /> {device}
      </span>
    );
  } else if (device === "laptop") {
    return (
      <span className="flex items-center gap-3">
        <Laptop size={20} /> {device}
      </span>
    );
  } else {
    return (
      <span className="flex items-center gap-3">
        <Monitor size={20} /> {device}
      </span>
    );
  }
};

export const roleConverter = (rawRole: string) => {
  const role = rawRole.toLowerCase();
  if (role === "admin")
    return (
      <span className="flex items-center gap-3 capitalize">
        <UserCog /> {role}
      </span>
    );
  if (role === "user")
    return (
      <span className="flex items-center gap-3 capitalize">
        <User /> {role}
      </span>
    );
  if (role === "guest")
    return (
      <span className="flex items-center gap-3 capitalize">
        <UserPlus /> {role}
      </span>
    );
};

export const notificationConverter = (notification: Notification, i: number) => {
  if (notification.type === "alert") {
    return (
      <Card key={i} className="p-5 flex items-center justify-between bg-yellow-300 text-yellow-800">
        <div className="flex items-center gap-5">
          <CircleAlert size={40} />
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold capitalize">{notification.type}</h2>
            <span className="text-sm">{notification.message}</span>
            <span className="text-xs">{new Date(notification.createdAt).toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <User />
          {notification.user.name}
        </div>
      </Card>
    );
  }
  if (notification.type === "info") {
    return (
      <Card key={i} className="p-5 flex items-center justify-between bg-blue-300 text-blue-800">
        <div className="flex items-center gap-5">
          <Info size={40} />
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold capitalize">{notification.type}</h2>
            <span className="text-sm">{notification.message}</span>
            <span className="text-xs">{new Date(notification.createdAt).toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <User />
          {notification.user.name}
        </div>
      </Card>
    );
  }
  if (notification.type === "warning") {
    return (
      <Card key={i} className="p-5 flex items-center justify-between bg-red-300 text-red-800">
        <div className="flex items-center gap-5">
          <TriangleAlert size={40} />
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold capitalize">{notification.type}</h2>
            <span className="text-sm">{notification.message}</span>
            <span className="text-xs">{new Date(notification.createdAt).toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <User />
          {notification.user.name}
        </div>
      </Card>
    );
  }
};
