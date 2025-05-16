'use client'
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import CodeInput from '@/components/CodeInput';
import FileUpload from '@/components/FileUpload';
import OutputDisplay from '@/components/OutputDisplay';
import { FaBars } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import Dropdown from '@/components/Dropdown';
import { useUser } from '@/app/context/userContext';
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from 'axios';

const docStyles = ["Inline Comments", "Docstrings", "Code Summary"];

function convertToTemplateLiteral(input: string): string {
  const cleaned = input
    .replace(/'\s*\+\s*/g, '')           // Remove trailing '+' and spaces
    .replace(/^ {0,4}'|';?$/gm, '')      // Remove leading/trailing single quotes per line
    .replace(/\\n/g, '\n');              // Convert '\n' to real newlines

  return `\`\n${cleaned}\``;
}



export default function ChatPage() {
  const [code, setCode] = useState('');
  const [docStyle, setDocStyle] = useState('Inline Comments');
  const [outputText, setOutputText] = useState<string>(''); 
  const [title, setTitle] = useState<string>(''); 
  const [recentChats, setRecentChats] = useState<string[]>([]);
  const [userName, setUserName] = useState('User');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  useEffect(() => {
    setUserName(localStorage.getItem('username') || 'User');
  }, []);

  const { userId, setUserId } = useUser();
  const updateHistory = (history: string[]) => {
    setRecentChats(history);
  };

  
 const handleGenerateDocumentation = async () => {
      setLoading(true);


   if (!code.trim()) {
      setOutputText('Please enter some code first.');
      return;
    }
        setOutputText('Generating documentation...');

    try {
      const response = await axios.post(
        'https://8q855mjd36.execute-api.us-west-2.amazonaws.com/dev/generate-text',
        { 
          'inputText': code, 
          'docStyle': docStyle
          
          },
          
        {

          headers: {
            'Content-Type': 'application/json'
          },
        }
        );
      const generatedDoc = response?.data?.result?.outputText;
      const dynamicTitle= response?.data?.result?.title
      setOutputText(generatedDoc);
      setTitle(dynamicTitle)

      // console.log('Generated Documentation:', generatedDoc);

      // Save documentation to DB <inline></inline>
      const save_response = await axios.post(
        'http://localhost:5000/api/saveHistory',
        {
          userId, // from context
          title: response?.data?.result?.title || `Generated Doc - ${new Date().toLocaleString()}`,
          code,
          docStyle,
          documentation: "Generated Document", // Convert to template literal
          
        },
        { withCredentials: true }
      );

    } catch (error: any) {
        const status = error?.response?.status;

        if (status === 401 || status === 403) {
          toast.error('Not Logged In. Please login to save the chat.');

        } else {
          console.error('Error:', error);
          toast.error(error?.response?.data?.message || 'Failed to generate documentation');
        }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
    // Call logout endpoint
      await axios.get('http://localhost:5000/auth/logout',
        {
        withCredentials: true
      }
    );

      // Clear userId from context and localStorage
      localStorage.removeItem('userId');
      localStorage.removeItem('userName'); // if you store this too
      setUserId(null);

      // Redirect to login page
      window.location.href = '/';
  } catch (error) {
    console.error('Logout failed:', error);
    alert('Logout failed. Please try again.');
  }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCopyOutput = () => {
    if (outputText) {
      navigator.clipboard.writeText(outputText);
      alert('Documentation copied to clipboard!');
    }
  };

  const handleDownloadOutput = () => {
    if (outputText) {
    const filename = `doc_output_${uuidv4().slice(0, 8)}.txt`;
    const blob = new Blob([outputText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
  />
      {/* Sidebar Component */}
      <div className={`relative ${isSidebarOpen ? 'w-64' : 'w-14'} transition-all duration-300`}>
       
        {/* Sidebar content, pass isSidebarOpen for + icon alignment */}
        <Sidebar
          recentChats={recentChats}
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex justify-between items-center px-6 py-3 h-16">
            <div className="flex items-center space-x-3">
              {/* No sidebar toggle here, only in sidebar */}
            
            
            
            </div>
            
            <div className="flex items-center space-x-4">
              {userId ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">Welcome, {userName}</span>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4 text-white">
                  <Link
                    href="/signin"
                    className="px-4 py-2 rounded-md shadow-lg"
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>
        {/* Main Content - full width, full height, no max-w or centering */}
        <main className="flex-1 p-0 m-0 bg-slate-100 flex flex-col justify-start items-stretch">
          <div className="w-full h-full flex flex-col flex-1 px-0 py-8">
            <div className="bg-white rounded-none shadow-none p-6 flex-1 flex flex-col justify-start items-center min-h-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Generate Documentation</h2>
             <div className='w-full max-w-[670px] flex justify-between items-end'>
              <FileUpload onUpload={setCode} />
               <Dropdown
                  label="Select Documentation Style"
                  options={docStyles}
                  value={docStyle}
                   onChange={setDocStyle}
                 />
                 </div>
              <div className="my-2  w-full max-w-2xl">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Or paste your code:
                </label>
                <CodeInput value={code} onChange={setCode} />
                
              </div>
              <button
                onClick={handleGenerateDocumentation}
                className="flex items-center justify-center w-full max-w-2xl py-3 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 transition shadow-md hover:shadow-lg transform"
                disabled={loading}
             >
        {loading ? 'Generating...' : 'Generate Documentation'}
              </button>
            </div>
            {outputText && (
              <div className="bg-white rounded-none shadow-none p-8 flex-1 flex flex-col justify-start items-center min-h-0 mt-8">
                <div className="flex justify-between items-center mb-4 w-full max-w-2xl">
                  <h2 className="text-xl font-semibold text-gray-800">Generated Documentation</h2>
                  <p className='text-black'>{title}</p>
                </div>
                <OutputDisplay outputText={outputText} />
                <div className="flex justify-end items-end mt-3.5 ml-[350px] space-x-2">
                    <button
                       onClick={handleCopyOutput}
                      className="flex  px-3 py-1.5  bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 transition text-sm font-medium  items-center shadow-sm"
                    >
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                      Copy
                    </button>
                    <button
                      onClick={handleDownloadOutput}
                      className=" px-3 py-1.5 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 transition text-sm font-medium shadow-sm"
                    >
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      Download
                    </button>
                  </div>
              </div>
            )}
          </div>
        </main>
        <footer className="bg-white border-t border-gray-200 py-3 px-6 text-center text-xs text-gray-500">
          <p>© 2025 CodeDoc Genie. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
