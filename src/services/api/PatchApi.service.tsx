import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { IGeneralPostRequest } from "../interfaces/request/GeneralRequest.interface";
import { IAPIResponse } from "../interfaces/response/GeneralResponse.interface";
import { ApiServiceInterceptor } from "../interceptors/ApiService.interceptor";

/*PATCH API SERVICE*/
const PatchDataApi = async <T,>(props: IGeneralPostRequest<T>): Promise<IAPIResponse<T>> => {
  try {
    const queryString = props.query ? `?${props.query}` : "";
    const url = `${props.path}${props.id ? `/${props.id}` : ""}${queryString}`;

    const response = await ApiServiceInterceptor.patch<IAPIResponse<T>>(url, props.body, {
      headers: props.headers,
      params: props.params,
    });
    return response.data as IAPIResponse<T>;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        return error.response.data as IAPIResponse<T>;
      } else {
        return {
          success: false,
          message: "No response data",
          result: null,
        } as unknown as IAPIResponse<T>;
      }
    } else {
      return {
        success: false,
        message: "An unexpected error occurred",
        result: null,
      } as unknown as IAPIResponse<T>;
    }
  }
};

export const PatchDataApiService = <T,>() => {
  const mutation = useMutation<IAPIResponse<T>, unknown, IGeneralPostRequest<T>>({
    mutationKey: ["Post Data Api Service"],
    mutationFn: PatchDataApi<T>,
  });

  const patchDataApi = async (props: IGeneralPostRequest<T>): Promise<IAPIResponse<T>> => {
    return await mutation.mutateAsync(props);
  };

  return {
    patchDataApi,
    isLoading: mutation.isPending,
    reset: mutation.reset,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
};
/*END OF SNIPPET PATCH API SERVICE*/
