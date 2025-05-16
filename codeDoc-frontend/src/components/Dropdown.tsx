import React from 'react';

type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
};

export default function Dropdown({ label, options, value, onChange }: Props) {
  return (
    <div >
      <label className=" block text-lg font-semibold text-black mb-2"> {/* Made text larger */}
        {label}
      </label>
      <select
        className="w-56 p-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
