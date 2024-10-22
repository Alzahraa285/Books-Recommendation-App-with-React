import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let RecentApiContext = createContext(null);

export const RecentApiProvider = ({ children }) => {
  const [recentdata, setRecenData] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.dbooks.org/api/recent")
      .then((response) => setRecenData(response.data.books))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <RecentApiContext.Provider value={{ recentdata, setRecenData }}>
      {children}
    </RecentApiContext.Provider>
  );
};

export default RecentApiProvider;
