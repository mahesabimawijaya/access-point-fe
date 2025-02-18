import { AxiosRequestHeaders } from "axios";

export interface IGeneralGetRequest {
  path: string;
  query?: string;
  params?: Record<string, string>; // Added this line
  enabled?: boolean;
}

export interface IGeneralPostRequest<T> {
  path: string;
  id?: string;
  query?: string;
  params?: Record<string, string | number>;
  headers?: AxiosRequestHeaders;
  body?: T;
}
