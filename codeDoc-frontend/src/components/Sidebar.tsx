import React, { useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaHistory,
  FaBookOpen,
} from 'react-icons/fa';

interface SidebarProps {
  recentChats: string[];
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Sidebar = ({ recentChats, onToggleSidebar, isSidebarOpen }: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredChats = recentChats.filter((chat) =>
    chat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen bg-slate-900 text-slate-200 flex flex-col shadow-xl transition-all duration-300 ease-in-out border-r border-slate-800
        ${isSidebarOpen ? 'w-64' : 'w-16'}
      `}
      style={{ minHeight: '100vh' }}
    >
      {/* Header / Toggle */}
      <div className={`flex items-center justify-${isSidebarOpen ? 'between' : 'center'} p-2 border-b border-slate-800 h-14`}>
        {isSidebarOpen && (
          <span className="text-lg font-bold text-white tracking-tight ml-2 transition-opacity duration-300">CodeDoc Genie</span>
        )}
        
        <button
           onClick={onToggleSidebar}
          className="flex items-center justify-center text-slate-400 hover:text-white focus:outline-none rounded-md hover:bg-slate-800 transition w-8 h-8 leading-none"
           title={isSidebarOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
>          <FaChevronRight className="w-4 h-4 text-white" />
        </button>

      </div>

      {/* Content that only shows when sidebar is open */}
      {isSidebarOpen && (
        <>
          {/* New Documentation Button */}
          <div className="p-2 opacity-100 transition-opacity duration-300">
            <button
              className="flex items-center justify-center w-full py-2 rounded-md bg-blue-700 hover:bg-blue-800 transition font-bold shadow text-white"
              title="New Documentation"
            >
              <span>New Doc</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-2 mb-4 px-3">
            <input
              type="text"
              placeholder="Search History"
              className="w-full p-2 rounded-md bg-slate-700 text-slate-200 border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Recent History */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 opacity-100 transition-opacity duration-300">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">History</h3>
            {filteredChats.length > 0 ? (
              filteredChats.map((chat, index) => (
                <a
                  href="#"
                  key={index}
                  className="flex items-center p-2.5 text-sm rounded-md hover:bg-slate-800 group transition-colors"
                  title={chat}
                >
                  <FaBookOpen className="w-5 h-5 text-slate-400 group-hover:text-slate-200 mr-3" />
                  <span className="truncate flex-1">{chat}</span>
                </a>
              ))
            ) : (
              <div className="p-2.5 text-sm text-slate-500 italic">
                No recent history
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-800 mt-auto opacity-100 transition-opacity duration-300">
            <p className="text-xs text-slate-500 text-center">
              CodeDoc Genie v1.0
            </p>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;

