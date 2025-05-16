const headers = {
  'Content-Type': 'application/json',
};

const getFetch = async <T = unknown>(url: string): Promise<T> => {
  const start = performance.now();
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`GET ${url} failed: ${res.statusText}`);
  }

  const end = performance.now();

  console.log(`start: ${start} end: ${end} = ${end - start}`);

  return res.json();
};

const postFetch = async <T = unknown, R = unknown>(url: string, data: T): Promise<R> => {
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`POST ${url} failed: ${res.statusText}`);
  }

  return res.json();
};

const putFetch = async <T = unknown, R = unknown>(url: string, data: T): Promise<R> => {
  const res = await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`PUT ${url} failed: ${res.statusText}`);
  }

  return res.json();
};

const deleteFetch = async <T = unknown>(url: string, id: string): Promise<T> => {
  const res = await fetch(url, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(id),
  });
  if (!res.ok) {
    throw new Error(`DELETE ${url} failed: ${res.statusText}`);
  }

  return res.json();
};

export { getFetch, postFetch, putFetch, deleteFetch };
