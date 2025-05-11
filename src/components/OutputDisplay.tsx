import React, { useState } from 'react';

type Props = {
  output: string;
};

export default function OutputDisplay({ output }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output); // Copy content to clipboard
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const saveToFile = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'generated_documentation.txt'; // The filename
    link.click(); // Simulate click to trigger download
  };

  return (
    <div className="mt-6 p-4 border rounded-md bg-gray-50 shadow-sm">
      <div className="h-64 overflow-auto p-2">
        <pre className="text-sm whitespace-pre-wrap">{output}</pre>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex space-x-4">
        <button
          onClick={saveToFile}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Save to File
        </button>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {isCopied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>
    </div>
  );
}
