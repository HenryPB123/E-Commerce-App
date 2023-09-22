import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGE2YjRjYTU2MmM2ZTE2OWE5YzBiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTI2NTU5MiwiZXhwIjoxNjk1NTI0NzkyfQ.vqdHv0NzL9TJcshcnogK00Bm5IJ4l6uO1g6avnoTqws";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
