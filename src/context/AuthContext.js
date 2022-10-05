import { createContext, useContext, useState, useEffect } from "react";
import { getUserContext } from "../utils/auth";
const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = (props) => {
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState();

  const [authToken, setAuthToken] = useState(storedToken);

  useEffect(() => {
    if (authToken) {
      console.log("fireme!");
      getUserContext(authToken)
        .then((data) => {
          console.log("use effect", data);
          setUser(data);
        })
        .catch((e) => console.log(e));
    }
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ user, setUser, authToken, setAuthToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
