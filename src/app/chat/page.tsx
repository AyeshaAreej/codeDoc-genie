'use client'
import { useState } from 'react';
import CodeInput from '@/components/CodeInput';
import Dropdown from '@/components/Dropdown';
import FileUpload from '@/components/FileUpload';
import OutputDisplay from '@/components/OutputDisplay';

const LANGUAGES = ['Python', 'JavaScript', 'Java'];
const FORMATS = ['Inline Comments', 'Docstrings', 'Summary'];

export default function Home({
  code,
  setCode,
  updateHistory,
}: {
  code: string;
  setCode: (code: string) => void;
  updateHistory: (history: string[]) => void;
}) {
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('Python');
  const [format, setFormat] = useState('Docstrings');

  const handleGenerate = async () => {
    const payload = { code, language, format };
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setOutput(data.result);

    const saved = localStorage.getItem('docHistory');
    const prev = saved ? JSON.parse(saved) : [];
    const updated = [code, ...prev.filter((c: string) => c !== code)].slice(0, 10);

    localStorage.setItem('docHistory', JSON.stringify(updated));
    updateHistory(updated);
  };

  return (
    <main className="w-full max-w-full mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-6">CodeDoc Genie</h1>

      <FileUpload onUpload={setCode} />
      <CodeInput value={code} onChange={setCode} />
      <Dropdown label="Language" options={LANGUAGES} value={language} onChange={setLanguage} />
      <Dropdown label="Documentation Style" options={FORMATS} value={format} onChange={setFormat} />

      <button
        onClick={handleGenerate}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Generate Documentation
      </button>

      <OutputDisplay output={output} />
    </main>
  );
}
