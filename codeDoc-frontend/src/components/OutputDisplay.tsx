import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const OutputDisplay =({ outputText }: { outputText: string }) =>{
  const [isCopied, setIsCopied] = useState(false);
// console.log("outputText",outputText)
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); 
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
 const handleSave = () => {
    const filename = `doc_output_${uuidv4().slice(0, 8)}.txt`;
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

 
  return (
    <div className="mt-6 p-4 border rounded-md bg-gray-50 shadow-sm max-w-2xl">
      <div className="h-64 overflow-auto p-2">
       <pre className="text-sm whitespace-pre-wrap text-black">{outputText}</pre>
      </div>

      {/* Buttons */}
      {/* <div className="mt-4 flex space-x-4">
        <button
          onClick={handleSave}
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
      </div> */}
    </div>
  );
}
export default OutputDisplay;