import axios from 'axios';

export const fetchExpenses = async ({ month }) => {
    const response = await axios.get(`/api/expenses`, { params: { month } });
    return response;
};
