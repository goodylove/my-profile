import { fetchCatFact } from "../services/catFact.js";

export const getProfile = async (req, res) => {
  try {
    const user = {
      email: "goodz575@gmail.com",
      name: "Nwachukwu Goodness",
      stack: "Node.js/Express",
    };
    const timestamp = new Date().toISOString();

    const fact = await fetchCatFact();
    res.status(200).json({
      status: "success",
      user,
      timestamp,
      fact,
    });
  } catch (error) {
    console.error("Get profile Error:", error.message);
    res.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
};
