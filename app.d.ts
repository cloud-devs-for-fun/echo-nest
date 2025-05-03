declare global {
  interface ResponseStatus<T> {
    data: T;
    statusCode: number;
    statusText: string;
  }
}

export {};
