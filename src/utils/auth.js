import axios from "axios";
const backend = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000/";
// const login =()=>{}

const registerUser = async (registerData) => {
  const res = await axios.post(`${backend}/auth/signup`, registerData);
  if (res.status === 200 || res.status === 201) {
    localStorage.setItem("token", res.data.token);
    return res.data;
  } else return false;
};

const getUserContext = async (token) => {
  const res = await axios.get(`${backend}/auth/me`, {
    headers: { authorization: token },
  });

  return res.data;
};

const loginUser = async (loginData) => {
  const res = await axios.post(`${backend}/auth/signin`, loginData);
  if (res.status === 200 || res.status === 201) {
    localStorage.setItem("token", res.data.token);
    return res.data;
  } else return false;
};

export { registerUser, getUserContext, loginUser };
