import React, { useRef, useEffect } from "react";
import KeyboardComponent from "./KeyboardComponent";

const Home = () => {
  const keyboardRef = useRef(null);

  useEffect(() => {
    console.log("keyboardRef", keyboardRef);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <KeyboardComponent
        keyboardRef={keyboardRef}
        inputNames={["firstName", "lastName"]}
      />
    </div>
  );
};
export default Home;
