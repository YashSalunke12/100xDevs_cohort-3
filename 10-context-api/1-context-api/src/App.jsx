import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const BulbContext = createContext();

const BulbProvider = ({ children }) => {
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <BulbContext.Provider
      value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
};

const App = () => {
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  );
};

const Light = () => {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
};

const LightBulb = () => {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>;
};

const LightSwitch = () => {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  return <button onClick={() => setBulbOn(!bulbOn)}>toggle bulb</button>;
};

export default App;
