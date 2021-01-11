import { useState } from 'react';

interface IUseRequest {
  url: string;
  method: 'GET';
}

interface IDoRequest {
  onSuccess(data: any): void;
  onError(err: any): void;
  query?: any;
}

export const useRequest = ({ url, method }: IUseRequest) => {
  const [isLoading, setLoading] = useState(false);

  const doRequest = async ({ query, onSuccess, onError }: IDoRequest) => {
    try {
      const res = await fetch(
        `${url}${query ? `?${new URLSearchParams(query)}` : ''}`,
        { method }
      );
      const json = await res.json();
      onSuccess(json);
    } catch (err) {
      onError(err);
    } finally {
      setLoading(false);
    }
  };

  return { doRequest, isLoading };
};
