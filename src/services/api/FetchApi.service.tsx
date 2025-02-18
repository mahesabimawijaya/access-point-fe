import { ApiServiceInterceptor } from "../interceptors/ApiService.interceptor";
import { IGeneralGetRequest } from "../interfaces/request/GeneralRequest.interface";
import { IAPIResponse } from "../interfaces/response/GeneralResponse.interface";
import { useQuery } from "@tanstack/react-query";

/*FETCH DATA API SERVICE*/
const FetchDataApi = async <T,>(request: IGeneralGetRequest): Promise<IAPIResponse<T>> => {
  const query = request.query ? `?${request.query}` : "";
  const response = await ApiServiceInterceptor.get(`${request.path}${query}`);
  return response.data as IAPIResponse<T>;
};

export const FetchDataApiService = (request: IGeneralGetRequest) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: [request.path, request.query],
    queryFn: () => FetchDataApi(request),
    enabled: request.enabled !== undefined ? request.enabled : true,
  });

  return {
    data,
    isLoading,
    refetch,
  };
};
/*END OF SNIPPET FETCH DATA API SERVICE*/
