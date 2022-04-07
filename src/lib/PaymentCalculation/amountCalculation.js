const axios = require("axios");

const calculationOfAmountToPay = async (date, billedAmount) => {
  try {
    const response = await axios.get(`https://mindicador.cl/api/uf/${date}`);
    const result = response.data;
    const uf = result.serie[0].valor;
    const currency = result.unidad_medida;

    const amountToPayCalculation = Math.trunc(billedAmount * uf);

    return {amountToPayCalculation, currency};
  } catch (error) {
    console.log(error);
  }
};

module.exports = calculationOfAmountToPay;
