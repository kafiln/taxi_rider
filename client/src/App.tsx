import React, { useEffect, useState } from "react";
function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://server:5000/").then((res) => res.text());
      setResponse(data);
    };
    fetchData();
  }, []);

  return (

    <>
    <div>Taxi rider App </div>
    <pre>
      {JSON.stringify(response)}
    </pre>
    </>
  );
}

export default App;
