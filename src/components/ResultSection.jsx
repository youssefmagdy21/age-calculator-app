import ResultField from "./ResultField";

const ResultSection = () => {
  return (
    <div className="mt-8">
      <ResultField number={""} label={"years"} />
      <ResultField number={""} label={"months"} />
      <ResultField number={""} label={"days"} />
    </div>
  );
};
export default ResultSection;
