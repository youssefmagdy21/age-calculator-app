import InputField from "./InputField";
import { useState } from "react";
const InputSection = ({ setResultDate }) => {
  const [birthDate, setBirthDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });

  const { day, month, year } = birthDate;

  const calculateAge = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let resultYears = currentYear - year;
    let resultMonths = currentMonth - month;
    if (resultMonths < 0) {
      resultYears--;
      resultMonths += 12;
    }
    let resultDays = currentDay - day;
    if (resultDays < 0) {
      resultMonths--;
      resultDays += 30;
    }
    setResultDate({
      days: resultDays,
      months: resultMonths,
      years: resultYears,
    });
  };
  return (
    <div className="relative flex w-[500px] gap-4 border-b border-light-grey pb-7">
      <InputField
        label={"day"}
        placeholder={"DD"}
        value={day}
        setBirthDate={setBirthDate}
      />
      <InputField
        label={"month"}
        placeholder={"MM"}
        value={month}
        setBirthDate={setBirthDate}
      />
      <InputField
        label={"year"}
        placeholder={"YYYY"}
        value={year}
        setBirthDate={setBirthDate}
      />
      <button
        type="button"
        className="hover: absolute -bottom-8 right-0
        flex
        h-16 w-16
      items-center  justify-center rounded-full bg-purble
      transition
        duration-300
       
        ease-in-out hover:bg-off-black"
        onClick={() => {
          console.log(day, month, year);
          calculateAge();
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
