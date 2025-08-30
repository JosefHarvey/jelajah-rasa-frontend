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
    </>
  )
}

export default AppWrapper
