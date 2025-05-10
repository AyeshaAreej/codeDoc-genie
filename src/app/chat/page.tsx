'use client';

import { useState } from 'react';
import CodeInput from '@/components/CodeInput';
import Dropdown from '@/components/Dropdown';
import OutputDisplay from '@/components/OutputDisplay';

const docStyles = ["Inline Comments", "Docstrings", "Code Summary"];

export default function ChatPage() {
  const [code, setCode] = useState('');
  const [docStyle, setDocStyle] = useState('Inline Comments');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateDocumentation = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/generateDocumentation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, docStyle }),
      });

      const data = await response.json();
      console.log("Frontend received:", data);
      console.log("Output Text:", data.result.result.outputText);  // Correctly access the nested outputText

      if (response.ok) {
        setOutputText(data.result.result.outputText);  // Set the nested outputText to the state
      } else {
        alert(data.error || 'Failed to generate documentation');
      }
    } catch (error: any) {
      alert('Error: ' + error.message || 'Failed to generate documentation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Generate Code Documentation</h1>
      <CodeInput value={code} onChange={setCode} />
      <Dropdown
        label="Select Documentation Style"
        options={docStyles}
        value={docStyle}
        onChange={setDocStyle}
      />
      <button
        onClick={handleGenerateDocumentation}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Documentation'}
      </button>

      {/* Display outputText only when it's not empty */}
      {outputText && <OutputDisplay outputText={outputText} />}
    </div>
  );
}
