
import Constants from 'expo-constants';


const API_BASE_URL_IOS = "http://10.33.163.239:3000/api";
const API_BASE_URL_ANDROID = "http://10.0.2.2:3000/api";

const API_BASE_URL = Constants.platform?.ios ? API_BASE_URL_IOS : API_BASE_URL_ANDROID;

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
  body?: any;
}

async function apiFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const url = `${API_BASE_URL}/${endpoint}`;
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined,
  };

  try {
    const response = await fetch(url, defaultOptions);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
}

export default apiFetch;
