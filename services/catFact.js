import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

export const fetchCatFact = async () => {
  try {
    const {data} = await axios.get(process.env.CAT_API_URL, {
      headers: { "Cache-Control": "no-cache" },

      timeout: 5000,
    });
    return data.fact || "No cat fact found"
  } catch (error) {
    console.log("Error Occurred While Fetching Cat Fact:", error.message);
  }
};
