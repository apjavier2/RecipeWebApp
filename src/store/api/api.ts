import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRecipes = async () => {
  try {
    const response = await api.get("/recipes");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
