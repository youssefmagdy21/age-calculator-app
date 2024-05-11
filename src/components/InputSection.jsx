import InputField from "./InputField";
import { useState } from "react";
const InputSection = ({ setResultDate }) => {
  const [birthDate, setBirthDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });
  const [errorStatus, setErrorStatus] = useState({
    emptyFields: false,
    notValidDate: false,
    notPastYear: false,
    notValidDay: false,
    notValidMonth: false,
  });
  const { day, month, year } = birthDate;
  const currentDate = new Date();

  const isValidDate = () => {
    return isValidMonth() && isValidDay();
  };
  const isLeapYear = () => {
    const y = parseInt(year);
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  };
  const isValidMonth = () => {
    return month >= 1 && month <= 12;
  };
  const isValidDay = () => {
    return day >= 1 && day <= getMonthDays();
  };
  const getMonthDays = () => {
    const m = parseInt(month);
    switch (m) {
      case 2:
        return isLeapYear() ? 29 : 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  };
  const isPastDate = () => {
    // date string short format used > MM/DD/YYYY
    const inputDate = new Date(`${month}/${day}/${year}`);
    return inputDate < currentDate;
  };
  const isPastYear = () => {
    return year < currentDate.getFullYear();
  };
  const calculateAge = () => {
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
    setErrorStatus({
      emptyFields: false,
      notValidDate: false,
      notPastYear: false,
      notValidDay: false,
      notValidMonth: false,
    });
  };
  const isEmptyFields = () => {
    return day == "" || month == "" || year == "";
  };
  // const handleError = () => {
  //   if (isEmptyFields()) {
  //     setResultDate({
  //       days: 0,
  //       months: 0,
  //       years: 0,
  //     });
  //     setErrorStatus((prev) => {
  //       return { ...prev, emptyFields: true };
  //     });
  //   } else if (!isValidDate()) {
  //     const m = isValidMonth();
  //     const d = isValidDay();
  //     setResultDate({
  //       days: 0,
  //       months: 0,
  //       years: 0,
  //     });
  //     setErrorStatus({
  //       emptyFields: false,
  //       notPastYear: false,
  //       notValidDay: !d,
  //       notValidMonth: !m,
  //     });
  //   } else if (!isPastDate()) {
  //     const p = isPastYear();
  //     console.log(p);
  //     setErrorStatus((prev) => {
  //       return { ...prev, notPastYear: !p };
  //     });
  //   }
  // };
  const handleError = () => {
    const isValidInputDay = day >= 1 && day <= 31;
    const m = isValidMonth();
    const p = isPastYear();
    const t = isValidDate();
    setResultDate({
      days: 0,
      months: 0,
      years: 0,
    });
    if (isEmptyFields()) {
      setErrorStatus((prev) => {
        return { ...prev, emptyFields: true };
      });
    } else {
      setErrorStatus({
        emptyFields: false,
        notValidDate: !t,
        notPastYear: !p,
        notValidDay: !isValidInputDay,
        notValidMonth: !m,
      });
    }
  };

  return (
    <div className="relative flex  justify-center gap-4 border-b border-light-grey pb-14 sm:w-[31.25rem] sm:justify-stretch sm:pb-7">
      <InputField
        label={"day"}
        placeholder={"DD"}
        value={day}
        setBirthDate={setBirthDate}
        errorStatus={errorStatus}
      />
      <InputField
        label={"month"}
        placeholder={"MM"}
        value={month}
        setBirthDate={setBirthDate}
        errorStatus={errorStatus}
      />
      <InputField
        label={"year"}
        placeholder={"YYYY"}
        value={year}
        setBirthDate={setBirthDate}
        errorStatus={errorStatus}
      />
      <button
        type="button"
        className="
        absolute
        -bottom-7
        right-auto
        flex
        h-14
        w-14
        items-center
        justify-center rounded-full
        bg-purble
        transition duration-300
        ease-in-out active:bg-off-black
        sm:-bottom-8
        sm:right-0
        sm:h-16 
        sm:w-16
        [@media(hover:hover){&:hover}]:bg-off-black
        "
        onClick={() => {
          console.log(day, month, year);
          isValidDate() && isPastDate() && !isEmptyFields()
            ? calculateAge()
            : handleError();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
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
