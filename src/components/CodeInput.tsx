import React from 'react';

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function CodeInput({ value, onChange }: Props) {
  return (
    <textarea
      className="w-full h-64 p-4 border rounded resize-none font-mono"
      placeholder="Paste your code here..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
