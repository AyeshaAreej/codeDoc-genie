'use client'
import { useState, useEffect } from 'react';
import CodeInput from '@/components/CodeInput';
import Dropdown from '@/components/Dropdown';
import FileUpload from '@/components/FileUpload';
import OutputDisplay from '@/components/OutputDisplay';
import HistoryPanel from '@/components/HistoryPanel';

const LANGUAGES = ['Python', 'JavaScript', 'Java'];
const FORMATS = ['Inline Comments', 'Docstrings', 'Summary'];

export default function Home() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('Python');
  const [format, setFormat] = useState('Docstrings');
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('docHistory');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const handleGenerate = async () => {
    const payload = { code, language, format };
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setOutput(data.result);
    const updated = [code, ...history.slice(0, 9)];
    setHistory(updated);
    localStorage.setItem('docHistory', JSON.stringify(updated));
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">CodeDoc Genie</h1>

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
      <HistoryPanel history={history} onSelect={setCode} />
    </main>
  );
}
