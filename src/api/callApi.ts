import axios from 'axios';

import { _URL } from './apiUrl';

export const getWork = async (): Promise<any> => {
  try {
    const response = await axios.get(_URL.WORK_LIST);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postUpdateApi = async (param: any): Promise<any> => {
  try {
    const response = await axios.post(_URL.WORK_UPDATE, param);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postCreateApi = async (param: any): Promise<any> => {
  try {
    const response = await axios.post(_URL.WORK_CREATE, param);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postDeleteApi = async (id: number): Promise<any> => {
  console.log(id);
  try {
    const response = await axios.post(
      _URL.WORK_DELETE.replace(':id', id.toString())
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const postDeleteApi2 = async (id: number): Promise<any> => {
  console.log(id);
  try {
    const response = await axios.post(
      `${_URL.WORK_DELETE_2}/${id}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
