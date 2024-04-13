import AppRoutes from "./routes/AppRoutes"
import PublicRoutes from "./routes/PublicRoutes"
import { createContext, useState } from "react"

export const AuthContext = createContext();

function App() {
  const[logged, setLogged] = useState(false);
  
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
