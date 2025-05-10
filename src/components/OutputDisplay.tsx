import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const OutputDisplay = ({ outputText }: { outputText: string }) => {
  const handleSave = () => {
    const filename = `doc_output_${uuidv4().slice(0, 8)}.txt`;
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(outputText).then(() => {
      alert('Copied to clipboard!');
    });
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg mb-2">Generated Output</h2>
      <pre className="p-2 border rounded mb-4 whitespace-pre-wrap">{outputText}</pre>
      <div className="flex space-x-4">
        <button onClick={handleSave} className="bg-green-500 text-white py-2 px-4 rounded">
          Save to File
        </button>
        <button onClick={handleCopyToClipboard} className="bg-blue-500 text-white py-2 px-4 rounded">
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default OutputDisplay;
