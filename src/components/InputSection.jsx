import InputField from "./InputField";

const InputSection = () => {
  return (
    <div className="border-light-grey relative flex w-[500px] gap-4 border-b pb-7">
      <InputField label={"day"} placeholder={"DD"} />
      <InputField label={"month"} placeholder={"MM"} />
      <InputField label={"year"} placeholder={"YYYY"} />
      <button
        type="button"
        className="bg-purble hover:bg-off-black hover: absolute
        -bottom-8
        right-0 flex
      h-16  w-16 items-center justify-center
      rounded-full
        transition
       
        duration-300 ease-in-out"
        onClick={() => {
          console.log("button was clicked");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 46 46"
        >
          <g fill="none" stroke="#FFF" strokeWidth="2">
            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
          </g>
        </svg>
      </button>
    </div>
  );
};
export default InputSection;
