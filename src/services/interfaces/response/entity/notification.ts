import { User } from "./user";

export interface Notification {
  id: string;
  user: User;
  type: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
