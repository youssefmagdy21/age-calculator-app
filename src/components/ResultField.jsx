const ResultField = ({ number, label }) => {
  return (
    <div className="mb-1 text-5xl font-extrabold italic last:mb-0 sm:text-6xl">
      <span className="mr-2 text-purble">{number || "- -"}</span>
      <span className="text-off-black">{label}</span>
    </div>
  );
};
export default ResultField;
