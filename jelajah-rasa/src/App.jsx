import { useMemo } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Approutes from "./Routes/Approutes"
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Authprovider from "./Authcontext";

function AppWrapper() {
  return (
 
        <Router>
          <Authprovider>
          <App />
          </Authprovider>

        </Router>
  );
}

function App() {
  
  const location = useLocation()

  const hideFooter = useMemo(() => {
    const hiddenPrefixes = [
      "/Map",
      "/Profile",
      "/About"
    ]
    return hiddenPrefixes.some((prefix) => 
      location.pathname.startsWith(prefix)
    )
  },[location.pathname])
  
  
  return (
    <>
      <Navbar />
      <main>
        <Approutes />
      </main>
      {!hideFooter && <Footer />}
    </>
  )
}

export default AppWrapper
