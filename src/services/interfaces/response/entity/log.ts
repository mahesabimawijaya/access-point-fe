import { AccessPoint } from "./access-point";
import { Device } from "./device";
import { User } from "./user";

export interface Log {
  id: string;
  accesspoint: AccessPoint;
  device: Device;
  user: User;
  eventType: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
