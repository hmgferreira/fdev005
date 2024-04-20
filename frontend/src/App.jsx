import AppRoutes from "./routes/AppRoutes"
import PublicRoutes from "./routes/PublicRoutes"
import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext();

function App() {
  const[logged, setLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token@fdev005");
    if(token === null) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  }, []);
  
  return (
    <>
      <AuthContext.Provider value={{ logged, setLogged }}>
        {/* IF TERNÁRIO */}
        {logged ? <AppRoutes /> : <PublicRoutes />}
      </AuthContext.Provider>
    </>
  );


 

}
      

export default App
