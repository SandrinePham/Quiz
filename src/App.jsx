import { useState } from "react";
import "./App.scss";
import AppRouter from "../src/routes/AppRouter.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
