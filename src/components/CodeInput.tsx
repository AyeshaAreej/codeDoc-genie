type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function CodeInput({ value, onChange }: Props) {
  return (
    <textarea
      className="w-full h-44 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none font-mono text-black" 
      placeholder="Paste your code here..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
