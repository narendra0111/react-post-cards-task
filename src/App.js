import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <h1 style={{textAlign:"center"}}>Loading...</h1>;
  }

  return (
    <div className="container">
      <CardList />
    </div>
  );
}

export default App;