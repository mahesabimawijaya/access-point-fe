import { Log } from "./log";
import { Session } from "./session";

export interface Device {
  id: string;
  sessions: Session[];
  logs: Log[];
  macAddress: string;
  deviceType: string;
}
