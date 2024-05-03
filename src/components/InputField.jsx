const InputField = ({
  label,
  placeholder,
  value,
  setBirthDate,
  errorStatus,
}) => {
  // check if there is any invalid value / case
  const isInvalid = Object.values(errorStatus).includes(true);
  return (
    <div>
      <label
        htmlFor={label}
        className={`block text-[0.625rem] font-bold uppercase tracking-[0.2em] ${isInvalid ? "text-light-red" : "text-smokey-grey"}`}
      >
        {label}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        name={label}
        id={label}
        value={value === 0 ? "" : value}
        required
        min={1}
        max={label === "day" ? 31 : label === "month" ? 12 : 9999}
        onChange={(e) => {
          setBirthDate((prevBirthDate) => {
            return { ...prevBirthDate, [e.target.name]: e.target.value };
          });
        }}
        className={`my-1 w-28 rounded-md
        border px-3 py-2 text-xl
        font-bold
        text-off-black
        outline-none
        transition
        duration-200
        ease-in-out placeholder:text-lg
        placeholder:font-bold
        placeholder:text-smokey-grey
        placeholder:opacity-80
        focus:border-purble
        ${isInvalid ? "border-light-red" : "border-light-grey"}
        `}
      />
      {(errorStatus.emptyFields && (
        <p className="text-[0.625rem] italic text-light-red">
          This field is required
        </p>
      )) ||
        (errorStatus.notValidMonth && label === "month" && (
          <p className="text-[0.625rem] italic text-light-red">
            Must be a valid {label}
          </p>
        )) ||
        (errorStatus.notValidDay && label === "day" && (
          <p className="text-[0.625rem] italic text-light-red">
            Must be a valid {label}
          </p>
        )) ||
        (errorStatus.notPastYear && label === "year" && (
          <p className="text-[0.625rem] italic text-light-red">
            Must be in the past
          </p>
        )) ||
        (errorStatus.notValidDate && label === "day" && (
          <p className="text-[0.625rem] italic text-light-red">
            Must be a valid date
          </p>
        ))}
    </div>
  );
};
export default InputField;
