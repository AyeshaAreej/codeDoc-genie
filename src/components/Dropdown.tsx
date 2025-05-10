type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
};

export default function Dropdown({ label, options, value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <select
        className="w-full p-2 border rounded"
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
