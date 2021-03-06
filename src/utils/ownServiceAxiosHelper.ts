/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @packageDocumentation
 * @module Services/AxiosHelper
 * Handles the different axios responses to get it with the expected format.
 */

import { AxiosError, AxiosResponse } from 'axios';
import { isObject, isString, isUndefined } from 'lodash';

export type ServiceResponseType = {
  statusCode: number;
  success: boolean;
  errorCode?: string | undefined;
  error?: string | undefined;
  payload?: any;
};

/**
 * Gets a service response from the data received.
 * @param responseData Data received from Axios response.
 * @param statusCode Status code from Axios.
 */
const getResponseType = function getResponseType(responseData: any, statusCode: number): ServiceResponseType {
  let result = responseData;
  const codedError = new Error('OTHER_SERVICE_INVALID_RESPONSE');
  if (isString(responseData)) {
    try {
      result = JSON.parse(responseData);
    } catch (err) {
      throw codedError;
    }
  }
  if (!isObject(result)) {
    throw codedError;
  }
  const validResult: any = result;
  return {
    statusCode,
    success: validResult.success,
    payload: validResult.payload,
    error: validResult.error,
    errorCode: validResult.errorCode,
  };
};

/**
 * Gets the content from an axios response.
 * @param response Response received from Axios.
 */
export const handleResponse = function handleResponse(response: AxiosResponse): ServiceResponseType {
  return getResponseType(response.data, response.status);
};

/**
 * Gets the content from an axios error.
 * @param error Error received from axios.
 */
export const handleError = function handleError(error: AxiosError): ServiceResponseType {
  const errorResponse: any = error;
  const axiosMessage = error.message;
  if (isUndefined(errorResponse)) {
    throw new Error(axiosMessage);
  }
  if (isUndefined(errorResponse.response)) {
    throw new Error('OTHER_SERVICE_INVALID_RESPONSE');
  }
  if (isUndefined(errorResponse.response.data)) {
    throw new Error('OTHER_SERVICE_INVALID_RESPONSE');
  }
  return getResponseType(errorResponse.response.data, errorResponse.code);
};

export default { handleResponse, handleError };
