import { Log } from "./log";

export interface User {
  id: string;
  notifications: Notification[];
  logs: Log[];
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
