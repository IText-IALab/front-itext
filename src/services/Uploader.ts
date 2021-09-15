/**
 * @packageDocumentation
 * @module Services/Uploader
 * Interacts with the NasaApod service.
 */

import axios, { AxiosResponse } from 'axios';

import CONFIG from '~/config';
import axiosHelper, { axiosError, axiosResponse } from '~/utils/axiosHelper';

/**
 * API Client to interact with the service.
 */

const APIClient = axios.create({
  baseURL: CONFIG.SERVICES.UPLOADER.URL,
  headers: {
    'X-API-KEY': `WOEIRUFHGJTMGJTURJFHGNVDDLCKDIWOEIRUFHGJTMGJTURJFHGNVDDLCKDI`,
  },
});

class Uploader {
  async sendDocuments(file: any): Promise<axiosResponse | axiosError> {
    const url = '/extract/base64';
    let response: AxiosResponse;
    let result;
    try {
      response = await APIClient.post(url, file);
      result = axiosHelper.handleResponse(response);
    } catch (error: any) {
      result = axiosHelper.handleError(error);
    }
    return result;
  }
}

export default new Uploader();
