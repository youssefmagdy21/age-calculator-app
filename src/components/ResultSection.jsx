import ResultField from "./ResultField";

const ResultSection = ({ resultDate }) => {
  const { days, months, years } = resultDate;
  return (
    <div className="mt-8">
      <ResultField number={years} label={"years"} />
      <ResultField number={months} label={"months"} />
      <ResultField number={days} label={"days"} />
    </div>
  );
};
export default ResultSection;
