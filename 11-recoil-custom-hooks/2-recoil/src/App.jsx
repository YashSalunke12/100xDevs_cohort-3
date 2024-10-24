import { createContext, useContext, useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </div>
  );
};

const Counter = () => {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrese />
    </div>
  );
};

const CurrentCount = () => {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
};

const Increase = () => {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
};

const Decrese = () => {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount((c) => c + 1)}>Decrease</button>;
};

export default App;
