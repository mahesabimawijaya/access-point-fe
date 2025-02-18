import { AccessPoint } from "./access-point";

export interface Firmware {
  id: string;
  accesspoints: AccessPoint[];
  version: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
