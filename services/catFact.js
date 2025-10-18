import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

export const fetchCatFact = async () => {
  let defaultFact = "A cat's appetite is the barometer of its health. Any cat that does not eat or drink for more than two days should be taken to a vet."
  try {
    const { data } = await axios.get(process.env.CAT_API_URL, {
      headers: { "Cache-Control": "no-cache" },

      timeout: 5000,
    });


    return data.fact || defaultFact
  } catch (error) {
    console.log("Error Occurred While Fetching Cat Fact:", error.message);
    return defaultFact
  }
};
