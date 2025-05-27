import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Components/Button.jsx";
import { FaMoneyBill } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function App() {
  return (
    <main>
      <Button
        size="lg"
        className="green"
        onClick={() => console.log("Loggin in with Google")}
      >
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
