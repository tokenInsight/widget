interface HttpRequestType {
  key: string;
  get<T>(url: string): Promise<Response<T>>;
  post<T>(url: string, data: T): Promise<Response<T>>;
}

type Response<T> = {
  status: Record<string, string | number>;
  data: T;
};

class HttpRequest implements HttpRequestType {
  key: string;
  constructor(key: string) {
    this.key = key;
  }
  async get<T>(url: string): Promise<Response<T>> {
    const response = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json', TI_API_KEY: this.key }
    });
    const resData = await response.json();
    return resData;
  }
  async post<T>(url: string, data: T): Promise<Response<T>> {
    const response = await fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json', TI_API_KEY: this.key },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }
}

export { HttpRequestType };

export default HttpRequest;
