import { AccessPoint } from "./access-point";
import { Device } from "./device";

export interface Session {
  id: string;
  device: Device;
  accesspoint: AccessPoint;
  startTime: Date;
  endTime: Date;
  bandwithUsed: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
