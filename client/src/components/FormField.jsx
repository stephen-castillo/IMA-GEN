import React from "react";

const FormField = ({
  name,
  labelName,
  isSurpriseMe,
  handleSurpriseMe,
  type,
  placeholder,
  value,
  handleChange,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label htmlFor={name} className="block text-sm font-medium text-white-900">
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
        type="button"
        onClick={handleSurpriseMe}
        className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-white"
        >
          Surprise me
        </button>
      )}
    </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-600 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-[#a8eb12] focus:border-[#a8eb12] outline-none block w-full p-3"
      />
  </div>
);

export default FormField;
