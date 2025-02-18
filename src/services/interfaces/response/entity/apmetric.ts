import { AccessPoint } from "./access-point";

export interface Apmetric {
  id: string;
  accesspoint: AccessPoint;
  timeStamp: Date;
  bandwithUsage: number;
  signalStrength: number;
  interferenceLevel: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
