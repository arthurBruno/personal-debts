import axios from 'axios';
const BASE_URL_JSON_PLACEHOLDER = 'https://jsonplaceholder.typicode.com';
const CODE7_DEBTS_BASE_URL = 'https://provadev.xlab.digital/api/v1/divida';
const CODE7_DEBTS_API_KEY = '7d43f9c1-3e73-459f-ae03-f8ae981ee0a4';

const getAllUsers = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL_JSON_PLACEHOLDER}/users`);

    return data;
  } catch (error) {
    return { error };
  }
};

const getAllDebts = async () => {
  try {
    const { data } = await axios.get(`${CODE7_DEBTS_BASE_URL}?uuid=${CODE7_DEBTS_API_KEY}`);

    if (data.success) {
      return data.result;
    }

    return { error: data.message };
  } catch (error) {
    return { error };
  }
};

const api = {
  getAllDebts,

  getUsersAndDebts: async () => {
    try {
      const data = {
        allDebts: await getAllDebts(),
        allUsers: await getAllUsers(),
      }

      return data;
    } catch (error) {
      return { error };
    }
  },

  createDebt: async (user, reason, amount) => {
    try {
      const body = {
        idUsuario: user.id,
        motivo: reason,
        valor: amount,
      };

      const { data } = await axios.post(`${CODE7_DEBTS_BASE_URL}?uuid=${CODE7_DEBTS_API_KEY}`, body);

      if (data.success) {
        return data.result;
      }

      return { error: data.message };
    } catch (error) {
      return { error };
    }
  },

  deleteDebt: async (debtId) => {
    try {
      const { data } = await axios.delete(`${CODE7_DEBTS_BASE_URL}/${debtId}?uuid=${CODE7_DEBTS_API_KEY}`);

      if (data.success) {
        return data.result;
      }

      return { error: data.message };
    } catch (error) {
      return { error };
    }
  },
};

export default api;
