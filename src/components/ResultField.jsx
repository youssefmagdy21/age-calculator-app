const ResultField = ({ number, label }) => {
  return (
    <div className="mb-1 text-6xl font-extrabold italic last:mb-0">
      <span className="text-purble mr-2">
        {number === 0 ? 0 : number || "- -"}
      </span>
      <span className="text-off-black">{label}</span>
    </div>
  );
};
export default ResultField;
