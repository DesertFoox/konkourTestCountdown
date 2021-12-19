import React, { useState } from "react";

import { toast } from "react-toastify";

import Input from "../Common/Input/Input";
import Button from "../Common/Button/Button";
import Timestamp from "../Timestamp/Timestamp";

const LandingContainer = () => {
  const [timer, setTimer] = useState<number>(0);
  const [optionTimer, setOptionTimer] = useState<number>(0);
  const [timeStamp, setTimeStamp] = useState<boolean>(false);

  const submitTest = () => {
    setTimeStamp(false);
    if (timer === 0 || optionTimer === 0) {
      setTimeStamp(false);

      toast.error("لطفا فیلد ها را کامل پر کنید", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setTimeStamp(true);
    }
  };

  const reset = () => {
    setTimeStamp(false);
    setOptionTimer(0);
    setTimer(0);
  };
  return (
    <div className="container  mx-auto px-5">
      <h1 className="text-center text-3xl mb-5 mt-5">
        شمارش گر تست ها و آزمون کنکور{" "}
      </h1>
      <div className="mx-auto w-64">
        <Input
          type="number"
          value={timer}
          onChange={(e) => setTimer(parseInt(e.target.value))}
          label="مدت زمان را وارد کنید"
          placeholder="مثلا 30 دقیقه"
        />
        <Input
          type="text"
          value={optionTimer}
          disabled={timer === 0 ? true : false}
          onChange={(e) => setOptionTimer(parseInt(e.target.value))}
          label="مدت زمان برای هر گزینه از تست را وارد کنید"
          placeholder="مثلا 40 ثانیه"
        />
        <div className="flex justify-center  mt-2">
          <Button
            disabled={timer === 0 || optionTimer === 0 ? true : false}
            className="text-white mr-2"
            onClick={() => submitTest()}
          >
            شروع
          </Button>
          <Button
            disabled={timer === 0 && optionTimer === 0 ? true : false}
            color="bg-red-600"
            className="text-white"
            onClick={() => reset()}
          >
            باز نویسی
          </Button>
        </div>
        {timeStamp && (
          <div className="flex justify-center items-center flex-col mt-5 w-72">
            <h2 className="mb-5" style={{ direction: "rtl" }}>
              {" "}
              {timer} دقیقه مدت زمان آزمون
            </h2>
            <Timestamp dur={timer} isComplete={false} isMinute />

            <h2 className="mb-5">مدت زمان هر سوال</h2>
            <Timestamp dur={optionTimer} isComplete isMinute={false} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingContainer;
