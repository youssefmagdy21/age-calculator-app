import { useState } from "react";
import InputSection from "./components/InputSection";
import ResultSection from "./components/ResultSection";

const App = () => {
  const [resultDate, setResultDate] = useState({
    days: 0,
    months: 0,
    years: 0,
  });

  return (
    <div className="rounded-xl rounded-br-[100px] bg-white p-8">
      <InputSection setResultDate={setResultDate} />
      <ResultSection resultDate={resultDate} />
    </div>
  );
};
export default App;
