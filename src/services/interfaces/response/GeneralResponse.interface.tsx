export interface IAPIResponse<T> {
  message: string;
  data: T;
  statusCode: number;
  pagination?: IPagination;
}

export interface IExternalAPIResponse<T> {
  success: boolean;
  message: string;
  result: T;
}

export interface IPagination {
  currentPage: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}
