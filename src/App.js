import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import "./App.css";

const Comments = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const ref = firebase.database().ref("test");
    ref.on("value", snapshot => {
      setData(snapshot.val());
    });
    return () => {
      ref.off();
    };
  }, []);
  return (
    <div className="App">
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

function App() {
  const [visible, toggle] = useState(true);
  return (
    <div className="App">
      <button onClick={() => toggle(!visible)}>Toggle</button>
      {visible && <Comments />}
    </div>
  );
}

export default App;
