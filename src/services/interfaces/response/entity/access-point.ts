import { Firmware } from "./firmware";
import { Session } from "./session";
import { Apmetric } from "./apmetric";
import { Log } from "./log";

export interface AccessPoint {
  id: string;
  firmware: Firmware;
  sessions: Session[];
  apmetrics: Apmetric[];
  logs: Log[];
  name: string;
  status: string;
  location: string;
  temperature: number;
  powerStatus: string;
  ssid: string;
  vlan: string;
  accessPolicy: string;
  lastCheck: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface AccessPointCount {
  total: number;
  online: number;
  offline: number;
}
