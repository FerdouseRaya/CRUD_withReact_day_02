import { useState, useEffect } from "react";
const useCustomHook = () => {
  const [count, setCount] = useState(0);
  const handleOnclickCount = () => {
    setCount((count) => count + increaseCount);
  };
  useEffect(() => {
    setCount(10);
  }, []);
  return { count, handleOnclickCount };
};
