import React, { useId, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"

// ref is a production gread code
const Input = React.forwardRef(
    function Input({ label, type = "text", className = "", ...props }, ref) {

        const [passwordVisible, setPasswordVisible] = useState(false);

        const togglePasswordVisibility = () => {
          setPasswordVisible(!passwordVisible);
        };
      
        const inputType = passwordVisible ? "text" : type;

        const id = useId()

        return (
            <div className="w-full flex flex-col gap-1">
            {label && (
              <label
                className="pl-1 text-lg text-gray-950  font-[500] font-inter"
                htmlFor={id}
              >
                {label}
              </label>
            )}
            <div
              className={`${
                type == "password"
                  ? "flex bg-white overflow-hidden"
                  : ""
              }`}
            >
              <input
                type={inputType}
                className={`px-3 py-2.5 rounded-sm border-[1px] border-gray-300 bg-white  backdrop-blur-md text-gray-700  font-nunito-sans text-base font-[500] outline-none focus:bg-gray-50 focus:border-blue-500 duration-200 w-full ${
                  type == "password" ? "md:w-[88%] w-[85%]" : "w-full"
                } ${className}`}
                ref={ref}
                {...props}
                id={id}
              />
              {type == "password" && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={` md:w-[12%] w-[15%] px-3 flex justify-center peer-hover:opacity-70 items-center border-[1px] border-gray-300 border-l-0  text-lg ${
                    !passwordVisible
                      ? "text-gray-800"
                      : "text-gray-500"
                  }`}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              )}
            </div>
          </div>
        )
    }
)

export default Input