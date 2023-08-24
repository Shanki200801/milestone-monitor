import React from "react";

const InputCard = ({ input_name, input_type, input_value, set_input }) => {
  return (
    <div className="w-full">
      <label
        for={input_name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {input_name}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={input_type}
        value={input_value}
        onChange={(e) => set_input(e.target.value)}
      ></input>
    </div>
  );
};

export default InputCard;
