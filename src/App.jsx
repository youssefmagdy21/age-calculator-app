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
    <div className="flex-col rounded-xl rounded-br-[6.25rem] bg-white px-6 py-8 sm:px-8">
      <InputSection setResultDate={setResultDate} />
      <ResultSection resultDate={resultDate} />
    </div>
  );
};
export default App;
