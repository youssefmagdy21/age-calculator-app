const InputField = ({ label, placeholder, value, setBirthDate }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-smokey-grey"
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        name={label}
        id={label}
        value={value === 0 ? "" : value}
        onChange={(e) => {
          setBirthDate((prevBirthDate) => {
            return { ...prevBirthDate, [e.target.name]: e.target.value };
          });
          // console.log(e.target.name);
        }}
        className="w-28 rounded-md border border-light-grey px-3
         py-2 text-xl font-bold text-off-black outline-none
        transition
        duration-200
        ease-in-out
        placeholder:text-lg
        placeholder:font-bold
        placeholder:text-smokey-grey placeholder:opacity-80
        focus:border-purble
        "
      ></input>
    </div>
  );
};
export default InputField;
