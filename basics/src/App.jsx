import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header header={"Logo"} />
      <div className="box">
        <Card name={"John"} title={"Brown Pusher"} age={"42"} />
        <Card name={"Bob"} title={"Fart Face"} age={"38"} />
        <Card name={"Mary"} title={"Poo Turd"} age={"64"} />
      </div>

      <Footer footer={"Copyrights"} />
    </>
  );
}

export default App;
