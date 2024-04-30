const InputField = ({ label, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="text-smokey-grey mb-1 block text-[10px] font-bold uppercase tracking-[0.2em]"
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        name={label}
        id={label}
        className="border-light-grey placeholder:text-smokey-grey text-off-black focus:border-purble w-28
         rounded-md border px-3 py-2 text-xl
        font-bold
        outline-none
        transition
        duration-200
        ease-in-out
        placeholder:text-lg placeholder:font-bold
        placeholder:opacity-80
        "
      ></input>
    </div>
  );
};
export default InputField;
