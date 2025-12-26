const API_URL = "http://localhost:5000/api";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  message: string;
  user: User;
}

export interface ErrorResponse {
  error: string;
}

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: "include", // Important for cookies
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong");
  }

  return data;
}

export const authAPI = {
  async register(name: string, email: string, password: string): Promise<AuthResponse> {
    return fetchAPI("/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    return fetchAPI("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },

  async logout(): Promise<{ message: string }> {
    return fetchAPI("/logout", {
      method: "POST",
    });
  },

  async getCurrentUser(): Promise<{ user: User }> {
    return fetchAPI("/me");
  },
};
