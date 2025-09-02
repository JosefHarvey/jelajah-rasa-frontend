import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Approutes from "./Routes/Approutes"
import { BrowserRouter as Router } from "react-router-dom";

function AppWrapper() {
  return (
      <Router>
        <App />
      </Router>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Approutes />
      </main>
      <Footer />
    </>
  )
}

export default AppWrapper
