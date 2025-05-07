'use client'
import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Chat from './chat/page';

const HistorySidebar = ({
  historyData,
  onSelect,
}: {
  historyData: string[];
  onSelect: (entry: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHistory = historyData.filter((entry) =>
    entry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full md:w-1/4 border-r border-white p-4 flex flex-col">
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search history..."
          className="w-full pt-[10px] p-2 pl-10 border border-white rounded focus:outline-none focus:ring-2 focus:ring-[#2a7be4] text-white bg-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <AiOutlineSearch className="absolute left-3 top-2 text-white mt-2" />
      </div>
      <div className="space-y-4 overflow-y-auto">
        {filteredHistory.map((entry, index) => (
          <div
            key={index}
            onClick={() => onSelect(entry)}
            className="bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer p-2"
          >
            {entry.length > 100 ? entry.slice(0, 100) + '...' : entry}
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [code, setCode] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('docHistory');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  return (
    <div className="flex flex-col bg-black md:flex-row h-screen">
      <HistorySidebar historyData={history} onSelect={setCode} />

      <div className="flex-1 p-6 overflow-y-auto">
        <Chat code={code} setCode={setCode} updateHistory={setHistory} />
      </div>
    </div>
  );
};

export default Home;
