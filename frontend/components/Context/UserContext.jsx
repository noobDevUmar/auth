import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext =createContext()

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
        if (!user) {
          // Retrieve the token from local storage
          const token = localStorage.getItem('token');
      
          // Create an instance of Axios with the token in the headers
          const axiosWithToken = axios.create({
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      
          axiosWithToken.get('http://localhost:3000/profile')
            .then(({ data }) => {
             
              setUser(data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }, []);
      

    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }