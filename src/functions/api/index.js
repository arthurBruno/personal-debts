import axios from 'axios';
const BASE_URL_JSON_PLACEHOLDER = process.env.REACT_APP_BASE_URL_JSON_PLACEHOLDER;
const CODE7_DEBTS_BASE_URL = process.env.REACT_APP_CODE7_DEBTS_BASE_URL;
const CODE7_DEBTS_API_KEY = process.env.REACT_APP_CODE7_DEBTS_API_KEY;

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

      if (data.allDebts && data.allDebts.error) {
        return { error: data.allDebts.error };
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

  updateDebt: async (debtId, userId, reason, amount) => {
    try {
      const body = {
        idUsuario: userId,
        motivo: reason,
        valor: amount,
      };

      const { data } = await axios.put(`${CODE7_DEBTS_BASE_URL}/${debtId}?uuid=${CODE7_DEBTS_API_KEY}`, body);

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
