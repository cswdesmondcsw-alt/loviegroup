import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const loginUser = async (loginData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/local`, {
      identifier: loginData.username,
      password: loginData.password,
    });

    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
export const updatePersonalDetails = async (token, userId, userData) => {
  try {
    const res = await axios.put(`${API_BASE_URL}/users/${userId}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getMe = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const fetchUserTenantData = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/users/me?populate=tenants`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
export const registerUser = async (payload) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/local/register`,
      payload,
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
