// createApi를 import하기위해 React 엔트리 포인트 사용
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios';
import { todo } from '../models/todo';

const Url = '';

type axiosProps = {
  url: string,
  method: 'post' | 'get' | 'update' | '',
  data: todo,
}

const axiosBaseQuery = async ({ url, method, data }: axiosProps) => {
  try {
    const response: any = await axios({
      method: method,
      url: Url + url,
      data: data,
    }).catch(err => {
      if (err.response.status === 401) {

      } else {
        throw err;
      }
    });

    if (response.status === 200) {

      return {
        data: response.data
      }

    } else {
      throw Object.assign(new Error('api error'), {
        status: response.status,
      });
    }
  } catch (err) {
    throw err;
  }
}
// base URL과 엔드포인트들로 서비스 정의
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery,
  endpoints: () => ({}),
})