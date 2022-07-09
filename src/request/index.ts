interface HttpRequestType {
  key: string;
  get(url: string): Promise<Response>;
  post<T>(url: string, data: T): Promise<Response>;
}

type Response = {
  status: Record<string, string | number>;
  data: Record<string, any>;
};

class HttpRequest implements HttpRequestType {
  key: string;
  constructor(key: string) {
    this.key = key;
  }
  async get(url: string): Promise<Response> {
    const response = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json', TI_API_KEY: this.key }
    });
    const resData = await response.json();
    return resData;
  }
  async post<T>(url: string, data: T): Promise<Response> {
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
